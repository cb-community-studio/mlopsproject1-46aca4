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
        if ele =='_id': continue
        columns.append(ele)

values = []
            
for cls in classifiers:
    rows = {}
    for ele in columns:
        for obj in my_collection.rewind():
            if ele =='_id': continue
            dict = {ele : obj[ele][cls]}
            rows = Merge(rows,dict)
    db['model_reshaped'].insert_one(rows)
    values.append(rows)

print(values)