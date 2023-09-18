from pycaret.datasets import get_data
from pycaret.classification import setup, compare_models

def setup_diabetes_data(data):
    diabetes = get_data('diabetes')
    clf1 = setup(data=diabetes, target='Class variable')
    return clf1

def compare_best_models():
    best = compare_models()
    return best