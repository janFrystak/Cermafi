import pandas as pd
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
import tkinter as tk
from tkinter import filedialog as fd
import os

load_dotenv()

database = os.getenv("DB_NAME")
table = os.getenv("TB_NAME")
user = os.getenv("DB_USER")
pswd = os.getenv("DB_PSWD")
port = os.getenv("DB_HOST")



def choose_files(prompt: str):
    root = tk.Tk()
    root.withdraw()  # hide main window

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

    if not filenames:
        print("No files chosen. Closing.")
        exit(1)

    print("Chosen files:")
    for f in filenames:
        print(f" → {f}")

    return filenames


def convert(path: str, engine):
    try:
        df = pd.read_excel(path, sheet_name="data")
        df["id"] = None
        df.to_sql(table, engine, if_exists="append", index=False)
        print(f"Successfully loaded: {os.path.basename(path)}")
    except Exception as e:
        print(f"Error loading file: {path}")
        print(e)
        exit(1)

def run(files):
    print("Connecting to database...")

    try:
        engine = create_engine(
            f"postgresql+psycopg2://{user}:{pswd}@localhost:{port}/{database}"
        )
        print("Connection successful!\n")
    except Exception as e:
        print("Unable to connect to database.")
        print(e)
        exit(1)

    print(f"Writing into table: {table}")
    conf = input("Continue? [y/n]: ").lower()
    if conf != "y":
        print("Task ended by user.")
        exit(0)

    for f in files:
        print(f"\nLoading: {f}")
        convert(f, engine)

    print("All Excel files successfully imported!")

files = choose_files("Please select Excel files")
run(files)