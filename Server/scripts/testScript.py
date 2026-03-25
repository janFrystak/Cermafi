import pandas as pd
from dotenv import load_dotenv, dotenv_values
from dotenv import load_dotenv, dotenv_values
from sqlalchemy import create_engine

config = dotenv_values("../Server/.env")

database = config["DB_NAME"]

user = config["DB_USER"]
pswd = config["DB_PSWD"]
port = config["DB_PORT"]
host = config["DB_HOST"]
engine = create_engine(
            f"postgresql+psycopg2://{user}:{pswd}@{host}:{port}/{database}"
        )
df = pd.read_sql("SELECT rok,kolo, COUNT(id) from public.uchazec group by rok, kolo", engine)
if df is None:
    df = 0

print(df)