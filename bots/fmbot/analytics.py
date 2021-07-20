from django.db import models
from .usertype import *
from .definations import *
from .models import Songs


class TrendingSongs(models.Model):
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_now=True, auto_created=True)


class TrendingArtists(models.Model):
    artist = models.ManyToManyField(to=PlaybackSinger)
    updated_on = models.DateTimeField(auto_created=True, auto_now=True)


class TrendingAlbums(models.Model):
    album = models.ManyToManyField(to=Album)
    updated_on = models.DateTimeField(auto_now=True, auto_created=True)


class NewReleases(models.Model):
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_created=True, auto_now=True)


class ListenedToday(models.Model):
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_created=True, auto_now=True)


class ListenedThisWeek(models.Model):
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_now=True, auto_created=True)


class TrendingMix(models.Model):
    songs = models.ManyToManyField(to=Songs)
    updated_on = models.DateTimeField(auto_now=True, auto_created=True)
