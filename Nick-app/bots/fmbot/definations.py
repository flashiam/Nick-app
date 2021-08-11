from django.db import models
# from .models import *


class Category(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)


class Album(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)


class Language(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)


class PlaybackSinger(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)


class MusicDirector(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)


class OtherContributors(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)


class MusicalGenre(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)


class SongMix(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    nodeId = models.CharField(max_length=200, null=False, unique=True)
