# Generated by Django 4.0.8 on 2023-02-10 00:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_remove_quarto_like_remove_quarto_url_quarto_imagem_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Quarto',
        ),
    ]
