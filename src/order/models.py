from django.db import models
from product.models import Product
from warehouse.models import WareHouse

# Create your models here.
class Order(models.Model):
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True, blank=True)
    wharehouse = models.ForeignKey(WareHouse, on_delete=models.CASCADE)

class OrderDetail(models.Model):
    amount = models.SmallIntegerField()
    order = models.ForeignKey(Order, related_name='detail', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='product', on_delete=models.CASCADE)

