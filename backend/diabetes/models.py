from django.db import models

class Information(models.Model):
    gender = models.CharField(max_length=10)
    age = models.CharField(max_length=120)
    bmi = models.FloatField()
    bloodPressure = models.IntegerField()
    pregnancies = models.IntegerField()
    weight = models.IntegerField()
    height = models.IntegerField()
    # Result = models.BooleanField(default=False)