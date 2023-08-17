from getData import setup_diabetes_data,compare_best_models
from pycaret.classification import pull

def main():
    # Setup diabetes data
    setup_diabetes_data()

    # Compare best models
    compare_best_models()

    # Evaluate the best model using evaluation metrics
    eval_results = pull()

    # Setup MongoDB collection
    my_collection = setup_mongo_collection("MlopsProject_1", "MdLists")

    # Insert evaluation results into MongoDB
    insert_evaluation_results(my_collection, eval_results)

if __name__ == "__main__":
    main()
