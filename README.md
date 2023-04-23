## Project Name - Boston House Pricing Recommendation System
The Boston House Pricing Recommendation System is a machine learning system that provides an estimate of the median value of owner-occupied homes in Boston, Massachusetts based on a set of input features. The system uses the Boston House Pricing dataset which contains information about different attributes like crime rate, property tax rate, pupil-teacher ratio, and other factors that may impact the value of a property.

The system takes these input features as input, applies machine learning algorithms to predict the median value of owner-occupied homes in Boston, and provides a recommendation to the user. This recommendation can help home buyers, real estate agents, or anyone who is interested in buying or selling properties to make informed decisions about the value of a property.

Overall, the Boston House Pricing Recommendation System helps to streamline the decision-making process related to property buying or selling and provides users with an estimate of the value of a property based on a set of input features.



### Boston House Pricing Dataset. 
This dataset was taken from the StatLib library which is maintained at Carnegie Mellon University. ( https://archive.ics.uci.edu/ml/machine-learning-databases/housing/ )


### Python Libraries used - 
pandas, numpy, matplotlib


### Attribute Information (in order):
        - CRIM     per capita crime rate by town
        - ZN       proportion of residential land zoned for lots over 25,000 sq.ft.
        - INDUS    proportion of non-retail business acres per town
        - CHAS     Charles River dummy variable (= 1 if tract bounds river; 0 otherwise)
        - NOX      nitric oxides concentration (parts per 10 million)
        - RM       average number of rooms per dwelling
        - AGE      proportion of owner-occupied units built prior to 1940
        - DIS      weighted distances to five Boston employment centres
        - RAD      index of accessibility to radial highways
        - TAX      full-value property-tax rate per $10,000
        - PTRATIO  pupil-teacher ratio by town
        - B        1000(Bk - 0.63)^2 where Bk is the proportion of blacks by town
        - LSTAT    % lower status of the population
        - MEDV     Median value of owner-occupied homes in $1000's



### Recommendation System
Data cleansing, pre-processing, analyzing, and model-training and building the prediction model are being done on jupyter notebook using Python libraries to make our recommendation model work more accurately. 

### Specifications
1. The frontend is built using the tech stack of HTML and Javascript
2. The backend is built completely using the libraries of Python
3. Frontend and backend are logically connected using the 'predict_api' API
4. The complete project is containerized using the docker. The project is 100% plug and play


### How to Run? 
Open the project in VS Code or any other code editor and open the terminal run the below command
```
python app.py
```

open this on the browser - http://127.0.0.1:5000

And that's it! 
