from django.db import models
from warehouse.models import WareHouse
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    amount = models.SmallIntegerField()
    wharehouse = models.ForeignKey(WareHouse, on_delete=models.CASCADE)

