from rest_framework.routers import DefaultRouter
from order.api.views import OrderApiViewSet

router_order = DefaultRouter()

router_order.register(prefix='',basename='',viewset=OrderApiViewSet)