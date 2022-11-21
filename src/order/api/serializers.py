from rest_framework.serializers import ModelSerializer
from order.models import Order, OrderDetail
from order.models import WareHouse
import logging

class OrderDetailSerializer(ModelSerializer):
    class Meta:
        model = OrderDetail
        fields = ['amount','product']

class OrderSerializer(ModelSerializer):
    detail = OrderDetailSerializer(many=True,required=True)
    class Meta:
            model = Order
            fields = ('id','name','number','date','wharehouse','detail')
            extra_kwargs = {
            'data': {},
        }

    def create(self, validated_data):
        tracks_data = validated_data.pop('detail')
        order = Order.objects.create(**validated_data)
        for track_data in tracks_data:
            logger = logging.getLogger(__name__)
            items = list(track_data.items())
            logger.warning(items)
            product = items[1][1]
            product.amount = product.amount - items[0][1]
            product.save()
            OrderDetail.objects.create(order=order, **track_data)
        return order


        



  