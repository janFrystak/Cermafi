import pandas as pd

from dotenv import load_dotenv, dotenv_values
from sqlalchemy import create_engine



df = pd.read_csv("../../Sources/m2018.csv")
pd.options.display.max_rows = 20
print(df)