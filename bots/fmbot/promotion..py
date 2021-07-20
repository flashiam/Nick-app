from django.db import models


class Bots(models.Model):
    token = models.CharField(max_length=200, null=False, unique=True)
    name = models.CharField(max_length=100, null=False, unique=True)
    created_on = models.DateTimeField(auto_created=True, auto_now=True)

class Servers(models.Model):
    discord_name = models.CharField(max_length=100, null=False, unique=True)
    members_count = models.IntegerField(null=True)
    chatbot = models.ForeignKey(to=Bots, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_created=True, auto_now=True)

class Promotion(models.Model):
