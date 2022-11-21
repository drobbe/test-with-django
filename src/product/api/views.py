from rest_framework.viewsets import ModelViewSet
from product.models import Product
from product.api.serializers import ProductSerializer
from django_filters.rest_framework import DjangoFilterBackend

class ProductApiViewSet(ModelViewSet):
    # serializer_class =
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['wharehouse']

    serializer_class = ProductSerializer
    queryset = Product.objects.all()


