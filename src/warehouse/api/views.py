from rest_framework.viewsets import ModelViewSet
from warehouse.models import WareHouse
from warehouse.api.serializers import WareHouseSerializer

class WareHouseApiViewSet(ModelViewSet):
    # serializer_class =
    serializer_class = WareHouseSerializer
    queryset = WareHouse.objects.all()

