from pymongo import MongoClient
import pandas as pd

database_name = "mlopsproject1"
collection_name = 'modelitems'

client = MongoClient("localhost", 27017)
db = client[database_name]
my_collection = db[collection_name].find({})

classifiers = ['et', 'lr', 'ridge', 'lda', 'xgboost', 'qda', 'nb', 'rf', 'lightgbm', 'gbc', 'ada', 'knn', 'dt', 'dummy', 'svm']
columns = []

def Merge(dict1, dict2):
    res = {**dict1, **dict2}
    return res

for obj in my_collection:
    for ele in obj:
        if ele == '_id':
            continue
        # new_ele = ele.replace('Prec.', 'Prec')  # Perform the replacement
        columns.append(ele)  # Append the modified string to the columns list
print(columns)


values = []
            
for cls in classifiers:
    rows = {}
    for ele in columns:
        dict_item = {ele: obj[ele][cls]}  # Use the 'obj' directly here
        rows = Merge(rows, dict_item)

    db['model_reschema'].insert_one(rows)
    values.append(rows)

print(values)
