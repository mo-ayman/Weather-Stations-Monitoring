import pandas as pd

# read parquet
df = pd.read_parquet('output/station_2/')

# show all the data in the dataframe

print(df['s_no'][999])
print(df[df['battery_status']=='medium'].count())
print(df[df['battery_status']=='low'].count())
print(df[df['battery_status']=='high'].count())
