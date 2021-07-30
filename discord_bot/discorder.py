import discord


intents = discord.Intents.default()
intents.members = True
client = discord.Client(intents=intents)


@client.event
async def on_ready():
    print('logged in as')
    print(client.user.name)
    print(client.user.id)
    print('-----')


newUserDMMessage = "WELCOME!"


# Public Welcome
@client.event
async def on_member_join(member):
    print("Recognized that " + member.name + " joined")
    await client.send_message(member, newUserDMMessage)
    await client.send_message(discord.Object(id='CHANNELID'), 'Welcome!')
    print("Sent message to " + member.name)
    print("Sent message about " + member.name + " to #CHANNEL")


# Mod Leave Announcement
@client.event
async def on_member_remove(member):
    print("Recognized that " + member.name + " left")
    await client.send_message(discord.Object(id='CHANNELID'), '**' + member.mention + '** just left.')
    print("Sent message to #CHANNEL")


@client.event
async def on_message(message):
    if message.author == client.user:
        return
    else:
        await message.channel.send("Hey ! "+str(message.author)+" How are you doing today ?")


client.run('ODY0MjIyMjY0NTI2MzcyODk0.YOyTtA.LExNYXzTfcDIyF7qARP9N2XK3s0')

