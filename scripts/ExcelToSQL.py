import pandas as pd
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
import tkinter as tk
import tkinter.filedialog as fd


load_dotenv()

database = os.getenv("DB_NAME")
table = os.getenv("TB_NAME")
user = os.getenv("DB_USER")
pswd = os.getenv("DB_PSWD")
port = os.getenv("DB_HOST")


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

def convert(path: str, engine):
    try:

        df = pd.read_excel(path, sheet_name="data")
        df["id"] = None
        df.to_sql(table, engine, if_exists="append", index=False)
        print("Succesfully loaded: {path}")
    except Exception as e:
        print("Error while loading file: {path}")
        print(e)
        exit(1)

def run(filepaths):
    print("Connecting to database...")

    try:
        print(user, pswd, port, database)
        engine = create_engine(
            f"postgresql+psycopg2://{user}:{pswd}@localhost:{port}/{database}"
        )
        print("Connection succesful!")
    except Exception as e:
        print("Unable to connect to database.")
        print(e)
        exit(1)

  

    print(f"Writing into table: **{table}**")
    conf = input("Continue? [y/n]: ").lower()
    if conf != "y":
        print("Task ended by user.")
        exit(0)

    for path in filepaths:
        print("Loading file: {path}")
        convert(path, engine)

    

    print("Excel tables succesfully converted into tables!")


print("=== EXCEL → PostgreSQL IMPORTER ===\n")

files = choose_files("Choose one or more Excel files:")
run(files)


