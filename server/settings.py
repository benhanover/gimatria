from decouple import config
import os

"""
Expose settings from these sources:
    1. environment variable
    2. .env file somewhere in file path
"""

MONGO_URL = config("MONGO_URL")
