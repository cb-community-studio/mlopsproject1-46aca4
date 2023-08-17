from pymongo import MongoClient

def setup_mongo_collection(database_name, collection_name):
    client = MongoClient("localhost", 27017)
    db = client[database_name]
    my_collection = db[collection_name]
    return my_collection

def insert_evaluation_results(collection, eval_results):
    values = eval_results.to_dict()
    collection.insert_one(values)