from fastapi import APIRouter

from backend.routes import (
    users,
    login
    )

api_router = APIRouter()
api_router.include_router(login.router, tags=["Login"])
api_router.include_router(users.router, prefix="/users", tags=["Users"])
