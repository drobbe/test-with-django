# Generated by Django 4.1.3 on 2022-11-21 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0006_orderdetail_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderdetail',
            name='amount',
            field=models.SmallIntegerField(),
        ),
    ]
