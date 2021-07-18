from django.db import models
from django.db.models.signals import post_save
from .definations import *
from fernet import Fernet
from .mainuser import MainUser
from .config import graphical

# Create your models here.


class Influence(models.Model):
    user = models.ForeignKey(to=MainUser, on_delete=models.CASCADE)
    spotifyToken = models.CharField(max_length=200, null=True)
    appleToken = models.CharField(max_length=200, null=True)
    authToken = models.CharField(max_length=200, null=False)
    facebookToken = models.CharField(max_length=200, null=True)
    timestamp = models.DateTimeField(auto_created=True, auto_now=True)


class General(models.Model):
    user = models.ForeignKey(to=MainUser, on_delete=models.CASCADE)
    spotifyToken = models.CharField(max_length=200, null=True)
    appleToken = models.CharField(max_length=200, null=True)
    authToken = models.CharField(max_length=200, null=False)
    facebookToken = models.CharField(max_length=200, null=True)


class Songs(models.Model):
    user = models.ForeignKey(to=Influence, on_delete=models.CASCADE)
    tagToken = models.CharField(max_length=200, auto_created=True)
    title = models.CharField(max_length=200, null=False, unique=True)
    description = models.TextField(max_length=1000, null=True, unique=False)
    artist = models.ManyToManyField(to=PlaybackSinger)
    album = models.ForeignKey(to=Album, on_delete=models.CASCADE)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE)
    language = models.ForeignKey(to=Language, on_delete=models.CASCADE)
    musicDirector = models.ForeignKey(to=MusicDirector, on_delete=models.CASCADE)
    otherContributor = models.ManyToManyField(to=OtherContributors)
    genre = models.ManyToManyField(to=MusicalGenre)
    mix = models.ManyToManyField(to=SongMix)
    createdOn = models.DateTimeField(auto_created=True, auto_now=True)


    @classmethod
    def on_create(cls, created, instance, *args, **kwargs):
        if not created:
            return
        else:
            return





class SuperAdmin(models.Model):
    user = models.ForeignKey(to=MainUser, on_delete=models.CASCADE)
    updatedOn = models.DateTimeField(auto_now=True, auto_created=True)


class KeyVault(models.Model):
    user = models.ForeignKey(to=Influence or SuperAdmin or General, on_delete=models.CASCADE)
    key = models.CharField(max_length=1000, null=False, unique=True)
    updated_at = models.DateTimeField(auto_created=True, auto_now=True)
