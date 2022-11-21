from rest_framework.routers import DefaultRouter
from product.api.views import ProductApiViewSet

product_warehouse = DefaultRouter()

product_warehouse.register(prefix='',basename='',viewset=ProductApiViewSet)