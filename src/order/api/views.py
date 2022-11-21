from rest_framework.viewsets import ModelViewSet
from order.models import Order
from order.api.serializers import OrderSerializer
from django_filters.rest_framework import DjangoFilterBackend
import logging
logger = logging.getLogger(__name__)

class OrderApiViewSet(ModelViewSet):
    # serializer_class =
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['wharehouse']

    serializer_class = OrderSerializer
    queryset = Order.objects.all()

  


