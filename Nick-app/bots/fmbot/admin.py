from django.contrib import admin
from .models import *
from .analytics import *
from .definations import *

# Register your models here.

admin.site.register(MainUser)
admin.site.register(Influence)
admin.site.register(General)
admin.site.register(Songs)
admin.site.register(TrendingSongs)
admin.site.register(TrendingArtists)
admin.site.register(TrendingAlbums)
admin.site.register(TrendingMix)
admin.site.register(NewReleases)
admin.site.register(ListenedToday)
admin.site.register(ListenedThisWeek)
admin.site.register(Category)
admin.site.register(Language)
admin.site.register(Album)
admin.site.register(PlaybackSinger)
admin.site.register(MusicDirector)
admin.site.register(OtherContributors)
admin.site.register(MusicalGenre)
admin.site.register(SongMix)





