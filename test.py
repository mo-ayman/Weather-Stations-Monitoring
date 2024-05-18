import pandas as pd

# read parquet
df = pd.read_parquet('output/station_1/1715684033722.parquet')

# show all the data in the dataframe
print(df['weather'][0])
