import pandas as pd
import os

from dotenv import load_dotenv, dotenv_values
from sqlalchemy import create_engine
import tkinter as tk
import tkinter.filedialog as fd


config = dotenv_values("../Server/.env")

database = config["DB_NAME"]
table = config["TB_NAME"]
user = config["DB_USER"]
pswd = config["DB_PSWD"]
port = config["DB_PORT"]

print(database, table, user, port)
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
        # df["id"] = None
        df.to_sql(table, engine, if_exists="append", index=False)
        print("Succesfully loaded: ", path)
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

  

    print(f"Writing into table: {table}")
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


