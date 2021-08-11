from rest_framework import serializers
from models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = "__all__"


class InfluenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Influence
        fields = "__all__"


class GeneralSerializer(serializers.ModelSerializer):
    class Meta:
        model = General
        fields = "__all__"

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class TrendingSongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class TrendingArtistsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class TrendingAlbumsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class NewReleasesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class TrendingSongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class TrendingSongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class TrendingArtistsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class TrendingAlbumsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class NewReleasesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class ListenedTodaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class ListenedThisWeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class TrendingMixSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"