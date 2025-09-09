import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine

load_dotenv()
database = "testdb"
table = "zkousky"

engine = create_engine("postgresql+psycopg2://dev:dev@localhost:5432/{testdb}")

df = pd.read_excel("../../Data/Lead_up/2025/Uchazeci/PZ2025_kolo1_uchazeci_prihlasky_vysledky.xlsx", sheet_name="data")
df.to_sql(table, engine, if_exists="append", index=True)


df = pd.read_excel("../../Data/Lead_up/2025/Uchazeci/PZ2025_kolo2_uchazeci_prihlasky_vysledky.xlsx", sheet_name="data")
df.to_sql(table, engine, if_exists="append", index=False)

print("Excel table uploaded to PostgreSQL!")


# import pandas as pd
# import psycopg2

# # Read Excel
# df = pd.read_excel("Cermat-script-test.xlsx")

# # Connect to Postgres
# conn = psycopg2.connect("dbname=testdb  host=localhost port=5432")
# cur = conn.cursor()

# # Create table manually
# cur.execute("""
#     CREATE TABLE IF NOT EXISTS my_table (
#         id SERIAL PRIMARY KEY,
#         ss1_red INT,
#         ss2_red INT,
#         ss3_red INT,
#         ss4_red INT,
#         ss5_red INT,
#         ss1_zrizovatel INT,
#         ss2_zrizovatel INT,
#         ss3_zrizovatel INT,
#         ss4_zrizovatel INT,
#         ss5_zrizovatel INT,
#         ss1_kkov TEXT,
#         ss1_kkov TEXT,
#         ss1_kkov TEXT,
#         ss1_kkov TEXT,
#         ss1_kkov TEXT
#         ss1_forma TEXT,
#         ss1_forma TEXT,
#         ss1_forma TEXT,
#         ss1_forma TEXT,
#         ss1_forma TEXT,
#         ss1_zkraceno INT,
#         ss1_zkraceno INT,
#         ss1_zkraceno INT,
#         ss1_zkraceno INT,
#         ss1_zkraceno INT,
#         ss1_prijat INT,
#         ss1_prijat INT,
#         ss1_prijat INT,
#         ss1_prijat INT,
#         ss1_prijat INT,
#         ss1_duvod_nepr TEXT,
#         ss1_duvod_nepr TEXT,
#         ss1_duvod_nepr TEXT,
#         ss1_duvod_nepr TEXT,
#         ss1_duvod_nepr TEXT,
#         c_m_procent_skor INT,
#         c_procent_skor INT,
#         m_procent_skor INT
        
#     )
# """)

# # Insert rows
# for _, row in df.iterrows():
#     cur.execute(
#         "INSERT INTO my_table (col1, col2, col3) VALUES (%s, %s, %s)",
#         (row['col1'], row['col2'], row['col3'])
#     )

# conn.commit()
# cur.close()
# conn.close()
