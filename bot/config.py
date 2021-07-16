import redis
from neo4j import GraphDatabase
import requests


# class DiscordClient(discord.Client):
#     async def on_ready(self):
#         return self.user
#
#     async def on_message(self):
#
#
# def discord_connect(token):
#     discorded = DiscordClient()
#     discorded.run(token)
#     return discorded


def redis_connect():
    r = redis.Redis(host="localhost", port=6379)
    return r


def neo4j_connect():
    graph = GraphDatabase.driver("neo4j://localhost:7687", auth=("neo4j", "specsoid"))
    return graph
