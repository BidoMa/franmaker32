from typing import Annotated, Any
from fastapi import APIRouter, Depends, HTTPException
from fastapi import Body,  HTTPException, status
from backend.features.users.models import (
    UserRegisterRequest,
    UserRegisterResponse,
    UserResponse
)
from backend.features.users.services import (
    create_user, get_user_by_email, get_current_active_user
)

router = APIRouter()

@router.post(
    "/signup",
    response_description="Add new user",
    response_model=UserRegisterResponse,
    status_code=status.HTTP_201_CREATED,
    response_model_by_alias=False,
)
async def register_user(user: UserRegisterRequest = Body(...)) -> UserRegisterResponse:
    """
        Create a new user record.
    """
    email_exists = await get_user_by_email(user.email)

    if email_exists:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El email ingresado ya existe",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    new_user = await create_user(user)
    return new_user

@router.get("/me", response_model=UserResponse)
async def read_users_me(current_user: Annotated[UserResponse, Depends(get_current_active_user)]):
    """
    Get the logged-in user
    """
    return current_user