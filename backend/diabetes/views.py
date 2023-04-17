import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

from django.shortcuts import render
from rest_framework.response import Response
from .models    import Information
from rest_framework.views import APIView
from .serializers import InformationSerializer
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
class InfoListAPI(APIView):
    def get(self, request):
        # data = pd.read_csv(r"D:\nodejs-projects\diabetes-django\diabetes-ml\backend\diabetes.csv")
        # X = data.drop("Outcome", axis=1)
        # Y = data["Outcome"]

        # X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2)
        # X_train
        # model = LogisticRegression()
        # model.fit(X_train, Y_train)

        
        # pred = model.predict([])

        queryset = Information.objects.all()
        print(queryset)
        serializer = InformationSerializer(queryset,many=True)
        return Response(serializer.data)
@api_view(["POST"])
@csrf_exempt
def index(request):
    serializer = InformationSerializer(data=request.data)
    print('d')
    print(request.data)
    if serializer.is_valid():
        gender = serializer.validated_data['gender']
        age = serializer.validated_data['age']
        bmi = int(serializer.validated_data['bmi'])
        bloodPressure = int(serializer.validated_data['bloodPressure'])
        pregnancies = int(serializer.validated_data['pregnancies'])
        weight = int(serializer.validated_data['weight'])
        height =int( serializer.validated_data['height'])
        print(height)
        datacv = pd.read_csv(r"D:\nodejs-projects\diabetes-django\diabetes-ml\backend\diabetes.csv")
        X = datacv.drop("Outcome", axis=1)
        Y = datacv["Outcome"]


        X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2)

        model = LogisticRegression()
        model.fit(X_train, Y_train)



        result = ''
        if pred ==  [1]:
            result = 'Positive'
        else: 
            result= 'Negative'

        return Response({'status': 'success', 'result': result})
    else:
        return Response(serializer.errors, status=400)

# from django.http import JsonResponse
# from sklearn.preprocessing import OneHotEncoder
# from sklearn.linear_model import LogisticRegression
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import train_test_split
# import pandas as pd
# import numpy as np

# def index(request):
#     if request.method == 'POST':
#         # Get input data from POST request
#         gender = request.POST.get('gender')
#         age = request.POST.get('age')
#         bmi = request.POST.get('bmi')
#         bloodPressure = request.POST.get('bloodPressure')
#         pregnancies = request.POST.get('pregnancies')
#         weight = request.POST.get('weight')
#         height = request.POST.get('height')

#         # Load data and preprocess it
#         datacv = pd.read_csv(r"D:\nodejs-projects\diabetes-django\diabetes-ml\backend\diabetes.csv")
#         X = datacv.drop("Outcome", axis=1)
#         Y = datacv["Outcome"]
#         cat_cols = ['gender']
#         encoder = OneHotEncoder(sparse=False, handle_unknown='ignore')
#         X_cat = encoder.fit_transform(X[cat_cols])
#         X_num = X.drop(cat_cols, axis=1)
#         scaler = StandardScaler()
#         X_scaled = scaler.fit_transform(np.hstack((X_num, X_cat)))

#         # Split into training and test sets
#         X_train, X_test, Y_train, Y_test = train_test_split(X_scaled, Y, test_size=0.2)

#         # Train the model
#         model = LogisticRegression()
#         model.fit(X_train, Y_train)

#         # Make prediction on input data
#         input_data = np.hstack((np.array([[gender]]), np.zeros((1, encoder.categories_[0].shape[0] - 1))))
#         input_data = scaler.transform(np.hstack((np.array([[age, bmi, bloodPressure, pregnancies, weight, height]]), input_data)))
#         pred = model.predict(input_data)

#         # Return result as JSON response
#         if pred == [1]:
#             result = 'Positive'
#         else:
#             result = 'Negative'
#         return JsonResponse({'result': result})
#     else:
#         return JsonResponse({'error': 'Invalid request method'})
