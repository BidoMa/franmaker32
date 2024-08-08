from fastapi import Depends, HTTPException
from typing import Annotated
import jwt
from fastapi import Depends, HTTPException, status
from jwt.exceptions import InvalidTokenError
from typing_extensions import Annotated
from backend.features.users.models import (
    TokenData,
    UserInDB,
    User,
    UserRegisterRequest,
    UserRegisterResponse
)
from bson import ObjectId
from backend.core.security import (
    verify_password,
    get_password_hash
)
from backend.deps import (
    settings, oauth2_scheme, client
)

db = client.franmaker
user_collection = db.get_collection("users")

async def authenticate_user(email: str, password: str):
    user = await get_user_by_email(email)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user

async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="No se pudo validar las credenciales",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(user_name=email)
    except InvalidTokenError:
        raise credentials_exception
    user = await get_user_by_email(email=token_data.user_name)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(
    current_user: Annotated[User, Depends(get_current_user)]
):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Usuario inactivo")
    return current_user

async def get_user(name: str):
    user = await user_collection.find_one({"user_name": name})
    if not user is None:
        return UserInDB(**user)
    
async def get_user_by_email(email: str) -> User | None:
    user = await user_collection.find_one({"email": email})
    
    if user:
        return UserInDB(**user)
    
    return None
        

async def create_user(user: UserRegisterRequest) -> UserRegisterResponse:
    user.hashed_password = get_password_hash(user.password)
    new_user = await user_collection.insert_one(
        user.model_dump(by_alias=True, exclude=["id", "password"])
    )

    created_user = await user_collection.find_one(
        {"_id": ObjectId(new_user.inserted_id)}
    )
    return UserRegisterResponse(**created_user)