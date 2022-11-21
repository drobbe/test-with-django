from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.
class WareHouse(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)