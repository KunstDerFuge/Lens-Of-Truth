# Generated by Django 3.0.7 on 2020-06-12 03:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_entity_short_bio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entity',
            name='short_bio',
            field=models.CharField(blank=True, max_length=80),
        ),
    ]
