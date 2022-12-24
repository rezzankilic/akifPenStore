from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    price = models.CharField(max_length=100, default='SOME STRING')
    type = models.CharField(max_length=100, default='SOME STRING' )
    
