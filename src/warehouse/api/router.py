from rest_framework.routers import DefaultRouter
from warehouse.api.views import WareHouseApiViewSet

router_warehouse = DefaultRouter()

router_warehouse.register(prefix='',basename='',viewset=WareHouseApiViewSet)