from django.contrib import admin
from order.models import Order
# Register your models here.

@admin.register(Order)
class OrdertAdmin(admin.ModelAdmin):
    list_display = ['id','name','number','date','wharehouse']