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
    current_max_id = 0
    try:
        current_max_id = pd.read_sql("SELECT MAX(id) FROM public.uchazec", engine).iloc[0,0]
    except Exception as e:
        print("Starting new table")
        current_max_id = 0
        
    try:
        df = pd.read_excel(path, sheet_name=sheet)
        df.columns = df.columns.astype(str).str.strip()
        # start from 1 not 0 and account already existing rows
        df.index = df.index+current_max_id+1
        # 1. Prepare Applicant Table (uchazec)
        uchazec = (
            df
            .reset_index()
            .rename(columns={'index': 'id'})
            [['id', 'rok', 'kolo', 'm_procentni_skor', 'c_procentni_skor']]
        )

        # 2. Prepare Choices Table (uchazec_volba)
        # These are the column attributes(suffixes after 'ssX_')
        atributes = ['zrizovatel', 'kkov', 'forma', 'zkraceno', 'prijat', 'duvod_neprijeti', 'redizo']
        duvod_neprijeti_table = {"prijat_na_vyssi_prioritu":1, "pro_nesplneni_podminek":2, "pro_nedostacujici_kapacitu": 3, "vzdal_se_prijeti":4}
        # 2. Melt the dataframe to get a long list of all 'ss' columns
        # Include 'index' as the identifier
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

        uchazec_volba['index'] = uchazec_volba['index'] + current_max_id + 1

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
        uchazec_volba = uchazec_volba.rename(columns={
            'index': 'uchazec_id', 
            'kkov': 'obor_kod',
            'duvod_neprijeti':'duvod_neprijeti_id'
        })


        atributes[1] = "obor_kod"
        atributes[5] = "duvod_neprijeti_id"
        
        
        
        # Make sure all expected columns exist even if they were empty in Excel
        removed_col = ""
        for col in atributes:
            if col not in uchazec_volba.columns:
                removed_col = removed_col+ col
                uchazec_volba[col] = None
        if removed_col not None:
            print("removed: "+ removed_col)
        # Remove empty choices (volby) 
        uchazec_volba = uchazec_volba.dropna(subset=['redizo'])

        # Reorder columns to match DB schema 
        uchazec_volba = uchazec_volba[['uchazec_id', 'poradi'] + atributes]
        

        # Save to SQL
        uchazec.to_sql("uchazec", engine, if_exists="append", index=False)
        uchazec_volba.to_sql("uchazec_volba", engine, if_exists="append", index=False)

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
        print("Connection succesful!")
    except Exception as e:
        print("Unable to connect to database.")
        print(e)
        exit(1)

  

    #print(f"Writing into table: {table}")

    '''conf = input("Continue? [y/n]: ").lower()
    if conf != "y":
        print("Task ended by user.")
        exit(0)
    '''
    if len(filepaths) > 1:
        sheet_option= input("select sheets Individualy[0] or Mass[1]")
        match int(sheet_option):
            case 0:
                option = None
            case 1:
                option = input("Please input datasheet number, [from 0]")
            case _:
                print("Invalid option chosen")
                exit()
    else:
        option = None    
    for path in filepaths:
        chosen_sheet = None
        xl = pd.ExcelFile(path)
        sheets = xl.sheet_names
        if option is None:
            sheets_id = []
            for id, item in enumerate(sheets):
                sheets_id.append(f"{item} [{id}]")
            print(f"Dostupné listy v souboru: {sheets_id}")
            data_sheet_id = input("Enter datasheet number: ")
            if not data_sheet_id:
                print("Please provice spreadsheets data sheet")
                exit(0)
            chosen_sheet = sheets[int(data_sheet_id)]
        else:
            chosen_sheet = sheets[int(option)]  
        print("Loading file: ", path)
        
        convert(path, engine, chosen_sheet)

    

    print("Excel tables succesfully converted into tables!")


print("=== EXCEL to PostgreSQL IMPORTER ===\n")

files = choose_files("Choose one or more Excel files:")
run(files)


