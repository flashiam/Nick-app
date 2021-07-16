from flask import Flask
from config import connector
import os

app = Flask(__name__)


discordConnect = connector(os.environ.get("DISCORD_TOKEN"))
