from decouple import config
import os

# Define your configuration settings
MONGO_URL = config("MONGO_URL")
