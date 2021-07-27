from django.db import models
from bots.fmbot.models import Influence, Songs, General


class Bots(models.Model):
    token = models.CharField(max_length=200, null=False, unique=True)
    name = models.CharField(max_length=100, null=False, unique=True)
    created_on = models.DateTimeField(auto_created=True, auto_now=True)


class Servers(models.Model):
    discord_name = models.CharField(max_length=100, null=False, unique=True)
    members_count = models.IntegerField(null=True)
    bot = models.ForeignKey(to=Bots, on_delete=models.CASCADE)
    members = models.ForeignKey(to=General, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_created=True, auto_now=True)


class Promotion(models.Model):
    influence = models.ForeignKey(to=Influence, on_delete=models.CASCADE)
    song = models.ForeignKey(to=Songs, on_delete=models.CASCADE)
    streams = models.IntegerField(null=False)
    giveaway = models.IntegerField(null=False)
    server = models.ForeignKey(to=Servers, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_created=True, auto_now=True)
