
from django.db import models
from django.contrib.auth.models import AbstractBaseUser

from .usertype import *
from .definations import *
# from .analytics import *


# Create your models here.

def token_creator():
    return "Hello"


class MainUser(AbstractBaseUser):
    TYPES = (
        ("Influencer", "Influencer"),
        ("General", "General"),
        ("SuperAdmin", "SuperAdmin")
    )
    userType = models.CharField(choices=TYPES, null=False, max_length=100)
    email = models.EmailField()
    timestamp = models.DateTimeField(auto_now=True, auto_created=True)


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
    tagToken = token_creator()
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