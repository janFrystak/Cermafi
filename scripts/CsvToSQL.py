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
            ("CSV files", ".csv"),
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

def process_dataFrame(df, table, engine):
    while True:
        if ('id' in df.columns): 
            id_override = input("Found existing column id, override column with a new one? (y/n)").lower()
            match id_override:
                case "y":
                    df = df.drop(columns=["id"])
                    df.index = df.index + 1
                    df.to_sql(table, engine, if_exists="replace", index=True, index_label="id", chunksize=1000)
                    break
                case "n":
                    df.to_sql(table, engine, if_exists="replace", index=False, chunksize=1000)
                    break
                case _:
                    print("Invlaid answer given")
        else:
            df.index = df.index+1
            df.to_sql(table, engine, if_exists="replace", index=True, index_label="id", chunksize=1000)
            break

def convert(path: str, engine, seperator: str, table: str):
    try:
        df = pd.read_csv(path, sep=seperator, encoding='utf-8-sig')
        process_dataFrame(df, table, engine)
        
        print("Succesfully loaded: ", path)
    except Exception as e:
        print("Error while loading file: ", path)
        print(e)
        exit(1)

def run(filepaths):
    print("Connecting to database...")
    print("testing: ", user, pswd, port, database)
    try:
        
        engine = create_engine(f"postgresql+psycopg2://{user}:{pswd}@localhost:{port}/{database}")
        """ print(user, pswd, database) """
        print("Connection succesful!")

    except Exception as e:
        print("Unable to connect to database.")
        print(e)
        exit(1)

    
    for path in filepaths:
        table = input("Please input table name (uchazec, skola, obor...):").strip().lower()
        seperator = input("Please input the CSV files seperator: ")
        conf = input("Continue? (y/n): ").lower()
        if conf != "y":
            print("Task ended by user.")
            break
        print(f"Selected table: {table} for file ", path)
        convert(path, engine, seperator, table)

    

    print("Excel tables succesfully converted into tables!")
    print("Closing connection")
    engine.dispose()


print("=== CSV → PostgreSQL IMPORTER ===\n")

files = choose_files("Choose one or more CSV files:")
run(files)


