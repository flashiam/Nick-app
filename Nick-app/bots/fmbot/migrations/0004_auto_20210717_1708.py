# Generated by Django 3.2.5 on 2021-07-17 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fmbot', '0003_mainuser_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mainuser',
            name='last_login',
        ),
        migrations.AddField(
            model_name='mainuser',
            name='name',
            field=models.CharField(default='guest', max_length=200),
        ),
        migrations.AlterField(
            model_name='mainuser',
            name='password',
            field=models.CharField(default='False', max_length=100),
        ),
    ]
