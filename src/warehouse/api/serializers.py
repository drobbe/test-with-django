from rest_framework.serializers import ModelSerializer
from warehouse.models import WareHouse

class WareHouseSerializer(ModelSerializer):
    class Meta:
            model = WareHouse
            fields = ['id','name','address']
