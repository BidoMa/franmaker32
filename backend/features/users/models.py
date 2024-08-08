from typing import Annotated, Optional, List
from pydantic.functional_validators import BeforeValidator
from pydantic import ConfigDict, BaseModel, Field, EmailStr
from bson import ObjectId

PyObjectId = Annotated[str, BeforeValidator(str)]

class UserRegisterRequest(BaseModel):
    """
    Container for a single user registration record.
    """
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    user_name: Optional[str] = Field(default=None)
    email: EmailStr = Field(...)
    full_name: Optional[str] = Field(default=None)
    password: str = Field(...)
    hashed_password: Optional[str] = Field(default=None)
    disabled: bool = True
    
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example": {
                "email": "johndoe@example.com",
                "user_name": "jdoe",
                "password": "123456"
            }
        },
        json_encoders = {
            ObjectId: str
        }
    )

class UserRegisterResponse(BaseModel):
    """
    Container for a single user registration response record.
    """

    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    user_name: Optional[str] = Field(default=None)
    email: EmailStr = Field(...)
    full_name: Optional[str] = Field(default=None)

class UserUpdate(BaseModel):
    """
    A set of optional updates to be made to a document in the database.
    """
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    email: EmailStr = Field(...)
    user_name: Optional[str] = Field(default=None)
    full_name: Optional[str] = Field(default=None)
    disabled: Optional[bool] = Field(default=None)
    password: Optional[str] = Field(default=None)
    model_config = ConfigDict(
        arbitrary_types_allowed=True,
        json_encoders={ObjectId: str},
        json_schema_extra={
            "example": {
                "user_name": "johndoe",
                "full_name": "John Doe",
                "disabled": False,
                "password": "1234"
            }
        },
    )

class UserResponse(BaseModel):
    """
    A set of optional updates to be made to a document in the database.
    """
    email: EmailStr = Field(...)
    user_name: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None

class Users():
    """
    A container holding a list of `User` instances.
    This exists because providing a top-level array in a JSON response can be a [vulnerability](https://haacked.com/archive/2009/06/25/json-hijacking.aspx/)
    """
    users: List[BaseModel]


# Auth Models
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    user_name: str | None = None


class User(BaseModel):
    user_name: str | None = None
    email: str | None = None
    full_name: str | None = None
    disabled: bool | None = None


class UserInDB(User):
    hashed_password: str

# Generic message
class Message(BaseModel):
    message: str