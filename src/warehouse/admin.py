from django.contrib import admin
from warehouse.models import WareHouse
# Register your models here.

@admin.register(WareHouse)
class WareHouseAdmin(admin.ModelAdmin):
    list_display = ['id','name','address']