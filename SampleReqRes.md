## 1. Register User

## POST api/register

## Request Body:

{
"userName": "Bala",
"email": "bala@gmail.com",
"password": "mypassword123"
}

## Response (201):

{
"success": true,
"message": "User registered successfully",
"user": {
"\_id": "64f8d9c2f6a9d21b5c9a2d34",
"userName": "Bala",
"email": "bala@gmail.com"
}
}

## Error Responses:

400 unable to register

## 2️. Login User

## POST api/login

## Request Body:

{
"email": "bala@example.com",
"password": "mypassword123"
}

## Response (200 OK):

{
"success": true,
"message": "Login successful",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

## Error Responses:

400 Unauthorized → Invalid credentials

## 3️. Get User Info (Protected)

## GET api/getUser

## Headers:

Authorization: Bearer <your_jwt_token>

## Response (200 OK):

{
"success": true,
"user": {
"\_id": "64f8d9c2f6a9d21b5c9a2d34",
"userName": "Bala",
"email": "bala@gmail.com"
}
}

## Error Responses:

401 Unauthorized → No token provided

401 Unauthorized → Invalid or expired token
