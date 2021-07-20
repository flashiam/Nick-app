import redis
import requests


def redis_connect():
    r = redis.Redis(host="localhost", port=6379)
    return r

