import pandas as pd
import os

from dotenv import load_dotenv, dotenv_values
from sqlalchemy import create_engine
import tkinter as tk
import tkinter.filedialog as fd


config = dotenv_values("../Server/.env")

database = config["DB_NAME"]

user = config["DB_USER"]
pswd = config["DB_PSWD"]
port = config["DB_PORT"]

print(database, user, port)
def choose_files(prompt: str) -> str:
    root = tk.Tk()
    root.withdraw()
    parent_dir = os.path.dirname(os.getcwd())
    filenames = fd.askopenfilenames(
        parent=root, 
        title=prompt,
        initialdir=parent_dir,
        filetypes=[
            ("Excel files", "*.xlsx *.xls"),
            ("All files", "*.*")
        ],
        )
    root.destroy()
    if filenames:
        print(f"{len(filenames)} file(s) chosen.\n")
    else:
        print("No files chosen, closing.")
        exit(1)
    return list(filenames)

def convert(path: str, engine, sheet: str):
    try:
        df = pd.read_excel(path, sheet_name=sheet)
        
        # 1. Prepare Applicant Table (uchazec_t)
        uchazec_t = (
            df.reset_index()
            .rename(columns={'index': 'id'})
            [['id', 'rok', 'kolo', 'c_m_procentni_skor', 'c_procentni_skor']]
        )

        # 2. Prepare Choices Table (uchazec_volba_t)
        # These are the column bases (suffixes after 'ssX_')
                # 1. Define attributes and identify all possible preference columns
        atributy = ['zrizovatel', 'kkov', 'forma', 'zkraceno', 'prijat', 'duvod_neprijeti', 'redizo']
        duvod_neprijeti_table = {"prijat_na_vyssi_prioritu":1, "pro_nesplneni_podminek":2, "pro_nedostacujici_kapacitu": 3, "vzal_se_prijeti":4}
        # 2. Melt the dataframe to get a long list of all 'ss' columns
        # We include 'index' as the identifier
        long_df = df.reset_index().melt(
            id_vars=['index'], 
            var_name='temp_col', 
            value_name='value'
        )

        # 3. Split 'ss1_redizo' into 'poradi' (1) and 'attribute' (redizo)
        # This regex captures the number after 'ss' and the text after the underscore
        extracted = long_df['temp_col'].str.extract(r'ss(\d+)_(\w+)')
        long_df['poradi'] = extracted[0]
        long_df['attribute'] = extracted[1]

        # 4. Filter out rows that didn't match the ss{i}_{attr} pattern (like 'rok', 'kolo')
        long_df = long_df.dropna(subset=['poradi', 'attribute'])

              

        # 5. Pivot the attributes back into columns
        uchazec_volba = long_df.pivot(
            index=['index', 'poradi'], 
            columns='attribute', 
            values='value'
        ).reset_index()

        # IMPORTANT: Remove the name of the columns level (currently 'attribute')
        uchazec_volba.columns.name = None 

        if "duvod_neprijeti" in uchazec_volba.columns:
            uchazec_volba["duvod_neprijeti"] = uchazec_volba["duvod_neprijeti"].astype(str).str.strip()
            # 2. Replace using the dictionary
            uchazec_volba["duvod_neprijeti"] = uchazec_volba["duvod_neprijeti"].replace(duvod_neprijeti_table)
            # 3. Convert 'nan' strings (from astype(str)) back to actual None/NaN for SQL
            uchazec_volba["duvod_neprijeti"] = uchazec_volba["duvod_neprijeti"].replace('nan', None)
            
        # 6. Final cleanup
        uchazec_volba = uchazec_volba.rename(columns={'index': 'uchazec_id'})
        uchazec_volba['poradi'] = uchazec_volba['poradi'].astype(int)
        
        # Ensure all expected columns exist even if they were empty in Excel
        for col in atributy:
            if col not in uchazec_volba.columns:
                uchazec_volba[col] = None

        # Remove empty choices (where redizo is missing)
        uchazec_volba = uchazec_volba.dropna(subset=['redizo'])

        # Reorder columns to match your DB schema exactly
        uchazec_volba = uchazec_volba[['uchazec_id', 'poradi'] + atributy]



        # 4. Save to SQL
        uchazec_t.to_sql("uchazec_t", engine, if_exists="append", index=False)
        uchazec_volba.to_sql("uchazec_volba_t", engine, if_exists="append", index=False)

        print("Successfully loaded: ", path)
    except Exception as e:
        print("Error while loading file: ", path)
        print(e)
        exit(1)


def run(filepaths):
    print("Connecting to database...")
    print("testing: ", user, pswd, port, database)
    try:
        
        engine = create_engine(
            f"postgresql+psycopg2://{user}:{pswd}@localhost:{port}/{database}"
        )
        print(user, pswd, database)
        print("Connection succesful!")
    except Exception as e:
        print("Unable to connect to database.")
        print(e)
        exit(1)

  

    #print(f"Writing into table: {table}")
    data_sheet = input("Enter datasheet: ")
    if not data_sheet:
        print("Please provice spreadsheets data sheet")
        exit(0)
    '''conf = input("Continue? [y/n]: ").lower()
    if conf != "y":
        print("Task ended by user.")
        exit(0)
    '''
    for path in filepaths:
        print("Loading file: ", path)
        convert(path, engine, data_sheet)

    

    print("Excel tables succesfully converted into tables!")


print("=== EXCEL → PostgreSQL IMPORTER ===\n")

files = choose_files("Choose one or more Excel files:")
run(files)


