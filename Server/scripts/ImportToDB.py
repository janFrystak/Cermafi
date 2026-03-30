import pandas as pd
import os
import sys
from sqlalchemy import create_engine, text
from dotenv import dotenv_values

# 1. Setup Paths and Config
script_dir = os.path.dirname(os.path.abspath(__file__))
env_path = os.path.join(script_dir, "..", "Server", ".env")
config = dotenv_values(env_path)

database = config.get("DB_NAME")
user = config.get("DB_USER")
pswd = config.get("DB_PSWD")
port = config.get("DB_PORT")
host = config.get("DB_HOST")

def convert(path, engine, append_mode):
    try:
        # Find current max ID for uchazec offset
        current_max_id = 0
        current_max_volba_id = 0
        if append_mode == "append":
            try:
                with engine.connect() as conn:
                    result = conn.execute(text("SELECT COALESCE(MAX(id), 0) FROM public.uchazec"))
                    current_max_id = int(result.scalar())
            except:
                current_max_id = 0
            try:
                with engine.connect() as conn:
                    result = conn.execute(text("SELECT COALESCE(MAX(id), 0) FROM public.uchazec_volba"))
                    current_max_volba_id = int(result.scalar())
            except:
                current_max_volba_id = 0

        # Load Data
        xl = pd.ExcelFile(path)
        df = pd.read_excel(path, sheet_name=xl.sheet_names[0])
        df.columns = df.columns.astype(str).str.strip()
        df.index = df.index + current_max_id + 1

        # --- 1. TABLE: uchazec ---
        uchazec = df.reset_index().rename(columns={'index': 'id'})[
            ['id', 'rok', 'kolo', 'm_procentni_skor', 'c_procentni_skor']
        ]

        # --- 2. TABLE: uchazec_volba ---
        duvod_map = {
            "prijat_na_vyssi_prioritu": 1,
            "pro_nesplneni_podminek": 2,
            "pro_nedostacujici_kapacitu": 3,
            "vzdal_se_prijeti": 4
        }

        long_df = df.reset_index().melt(id_vars=['index'], var_name='temp_col', value_name='value')
        extracted = long_df['temp_col'].str.extract(r'ss(\d+)_(\w+)')
        long_df['priorita'] = extracted[0]
        long_df['attribute'] = extracted[1]
        long_df = long_df.dropna(subset=['priorita', 'attribute'])

        uchazec_volba = long_df.pivot(index=['index', 'priorita'], columns="attribute", values='value').reset_index()
        uchazec_volba.columns.name = None

        # Data Cleaning
        if "duvod_neprijeti" in uchazec_volba.columns:
            uchazec_volba["duvod_neprijeti_id"] = uchazec_volba["duvod_neprijeti"].astype(str).str.strip().map(duvod_map)

        if "kkov" in uchazec_volba.columns:
            uchazec_volba['obor_kod'] = uchazec_volba['kkov'].astype(str).str.strip().str.replace(r'[-/]', '', regex=True).replace('nan', None)

        if "redizo" in uchazec_volba.columns:
            uchazec_volba = uchazec_volba.dropna(subset=['redizo'])
            uchazec_volba['redizo'] = uchazec_volba['redizo'].astype(float).astype(int)

        uchazec_volba = uchazec_volba.rename(columns={'index': 'uchazec_id'})

        # Generate IDs for uchazec_volba
        uchazec_volba = uchazec_volba.reset_index(drop=True)
        uchazec_volba.insert(0, 'id', range(current_max_volba_id + 1, current_max_volba_id + 1 + len(uchazec_volba)))

        # Syncing columns with DB schema
        final_cols = ['id', 'uchazec_id', 'priorita', 'obor_kod', 'forma', 'zkraceno', 'prijat', 'duvod_neprijeti_id', 'redizo']

        for col in final_cols:
            if col not in uchazec_volba.columns:
                uchazec_volba[col] = None

        uchazec_volba = uchazec_volba[final_cols]

        # Save to SQL
        uchazec.to_sql("uchazec", engine, if_exists=append_mode, index=False)
        uchazec_volba.to_sql("uchazec_volba", engine, if_exists=append_mode, index=False)

        print(f"SUCCESS|{os.path.basename(path)}|{len(uchazec)}")

    except Exception as e:
        print(f"ERROR|{os.path.basename(path)}|{str(e)}")
        raise e
    
def run():
    if len(sys.argv) < 3:
        print("ERROR|SYSTEM|Usage: script.py <append_option> <file_paths...>")
        sys.exit(1)

    append_option = sys.argv[1]
    file_paths = sys.argv[2:]
    append_mode = "replace" if append_option == "true" else "append"

    try:
        engine = create_engine(f"postgresql+psycopg2://{user}:{pswd}@{host}:{port}/{database}")
        
        for path in file_paths:
            convert(path, engine, append_mode)
            append_mode = "append" # Switch to append for subsequent files

        if append_option == "true":
            with engine.connect() as conn:
                conn.execute(text("CREATE INDEX IF NOT EXISTS idx_volba_uchazec_id ON uchazec_volba (uchazec_id);"))
                conn.execute(text("CREATE INDEX IF NOT EXISTS idx_volba_redizo ON uchazec_volba (redizo);"))
                conn.commit()

    except Exception as e:
        print(f"ERROR|DATABASE|{str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    run()