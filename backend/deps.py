from functools import lru_cache
from backend.core.config import Settings
from fastapi.security import OAuth2PasswordBearer
import motor.motor_asyncio

@lru_cache
def get_settings():
    return Settings()

settings = get_settings()
oauth2_scheme = OAuth2PasswordBearer(f"{settings.API_V1_STR}/token")
client = motor.motor_asyncio.AsyncIOMotorClient(settings.MONGO_URL)
