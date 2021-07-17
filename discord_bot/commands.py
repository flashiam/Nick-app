from bot.config import redis_connect


r = redis_connect()


def trending_songs():
    r.get("trending")