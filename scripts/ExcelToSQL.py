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
        # start from 1 not 0
        df.index = df.index+1
        # 1. Prepare Applicant Table (uchazec)
        uchazec = (
            df.reset_index()
            .rename(columns={'index': 'id'})
            [['id', 'rok', 'kolo', 'm_procentni_skor', 'c_procentni_skor']]
        )

        # 2. Prepare Choices Table (uchazec_volba)
        # These are the column attributes(suffixes after 'ssX_')
        atributes = ['zrizovatel', 'kkov', 'forma', 'zkraceno', 'prijat', 'duvod_neprijeti', 'redizo']
        duvod_neprijeti_table = {"prijat_na_vyssi_prioritu":1, "pro_nesplneni_podminek":2, "pro_nedostacujici_kapacitu": 3, "vzdal_se_prijeti":4}
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

              

        # 5. Change the attributes back into columns
        uchazec_volba = long_df.pivot(
            index=['index', 'poradi'], 
            columns= "attribute", 
            values='value'
        ).reset_index()

        # !! Remove the name of the columns level (currently 'attribute')
        uchazec_volba.columns.name = None 

        # Converting some row values into a more database friendly form
        if "duvod_neprijeti" in uchazec_volba.columns:
            uchazec_volba["duvod_neprijeti"] = uchazec_volba["duvod_neprijeti"].astype(str).str.strip()
            uchazec_volba["duvod_neprijeti"] = uchazec_volba["duvod_neprijeti"].replace(duvod_neprijeti_table)
            uchazec_volba["duvod_neprijeti"] = uchazec_volba["duvod_neprijeti"].replace('nan', None)

        if "kkov" in uchazec_volba.columns:
            uchazec_volba['kkov'] = uchazec_volba['kkov'].astype(str)
            uchazec_volba['kkov'] = uchazec_volba['kkov'].str.strip()
            uchazec_volba['kkov'] = uchazec_volba['kkov'].str.replace(r'[-/]', '', regex=True)
            uchazec_volba['kkov'] = uchazec_volba['kkov'].replace('nan', None)
    

        
        #Renaming columns
        uchazec_volba = uchazec_volba.rename(columns={'index': 'uchazec_id', 'kkov': 'obor_kod', 'duvod_neprijeti':'duvod_neprijeti_id'})  
        uchazec_volba["id"] = pd.RangeIndex() 
        atributes[1] = "obor_kod"
        atributes[5] = "duvod_neprijeti_id"
        
        # uchazec_volba['poradi'] = uchazec_volba['poradi'].astype(int)
        
        # Make sure all expected columns exist even if they were empty in Excel
        removed_col = ""
        for col in atributes:
            if col not in uchazec_volba.columns:
                removed_col = removed_col+ col
                uchazec_volba[col] = None
        print("removed: "+ removed_col)
        # Remove empty choices (volby) 
        uchazec_volba = uchazec_volba.dropna(subset=['redizo'])

        # Reorder columns to match DB schema 
        uchazec_volba = uchazec_volba[['uchazec_id', 'poradi'] + atributes]


        # Save to SQL
        uchazec.to_sql("uchazec", engine, if_exists="replace", index=False)
        uchazec_volba.to_sql("uchazec_volba", engine, if_exists="replace", index=False)

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


