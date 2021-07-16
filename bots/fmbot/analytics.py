from django.db import models
from .usertype import *
from .definations import *
from .models import Songs


class TrendingSongs(models.Model):
    id = models.AutoField()
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_now=True, auto_created=True)


class TrendingArtists(models.Model):
    id = models.AutoField()
    artist = models.ManyToManyField(to=PlaybackSinger)
    updated_on = models.DateTimeField(auto_created=True, auto_now=True)


class TrendingAlbums(models.Model):
    id = models.AutoField()
    album = models.ManyToManyField(to=Album)
    updated_on = models.DateTimeField(auto_now=True, auto_created=True)


class NewReleases(models.Model):
    id = models.AutoField()
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_created=True, auto_now=True)


class ListenedToday(models.Model):
    id = models.AutoField()
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_created=True, auto_now=True)


class ListenedThisWeek(models.Model):
    id = models.AutoField()
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_now=True, auto_created=True)


class TrendingMix(models.Model):
    id = models.AutoField()
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_now=True, auto_created=True)
