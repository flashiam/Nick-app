from django.db import models
# from .models import *


class UserAge(models.Model):
    age = models.IntegerField(unique=True, null=False)
    nodeId = models.CharField(unique=True, null=False, max_length=200)


class UserRegion(models.Model):
    region = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)


class UserGroup(models.Model):
    group_name = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)