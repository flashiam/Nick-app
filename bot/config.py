import os

import discord
import redis


class DiscordClient(discord.Client):
    class Meta:
        async def on_ready(self):
            return self.user


def connector(token):
    discorded = DiscordClient()
    discorded.run(token)
    return discorded
