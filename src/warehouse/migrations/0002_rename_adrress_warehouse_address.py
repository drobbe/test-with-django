# Generated by Django 4.1.3 on 2022-11-19 15:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('warehouse', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='warehouse',
            old_name='adrress',
            new_name='address',
        ),
    ]
