from pymongo import MongoClient
import pandas as pd

database_name = "mlopsproject1"
collection_name = 'modelitems'

client = MongoClient("localhost", 27017)
db = client[database_name]
my_collection = db[collection_name]
model_values = my_collection.find({})

classifiers = ['et', 'lr', 'ridge', 'lda', 'xgboost', 'qda', 'nb', 'rf', 'lightgbm', 'gbc', 'ada', 'knn', 'dt', 'dummy', 'svm']
rows = [[]]
c = 0

for document in model_values:
    for col in document:
        if col == '_id' : continue
        print(col)
        print(document[col])
#         collection = col.replace('.','')
        d = 14
        for cls in classifiers:
            value = document[col][cls]
            print(c, d, value, col, cls)

            rows.insert(d, {col : value})
            d -= 1
            if d==0: d=14
#             # db[collection_name].insert_one({ col : value})
#     values.append(rows)
print(rows)
# db['model_test'].insert_one(rows)


