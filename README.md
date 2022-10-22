# JWT-AUTH
Autenticación JWT usando Node, Express y PostgreSQL (Sequelize)

## CREAR USUARIO
POST http://localhost:3001/users
Content-Type: application/json

{
  "fullname": "Maxi",
  "email" : "maxi@mail.com",
  "password": "123456"
}

## LISTA DE USUARIOS
GET http://localhost:3001/users
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTc4ZDM2ZDgtZmEyNS00YTA2LWEzODAtZWYyNDViZTFkOGIwIiwidXNlcl9uYW1lIjoiTW9yZ2FuIiwidXNlcl9lbWFpbCI6Im1vcmdhbkBnbWFpbC5jb20iLCJpYXQiOjE2MjAyNTQwMTUsImV4cCI6MTYyMDI1NDA0NX0.zNve8UI5gN3iC3O9UrVZxxOphurCsgCuFJOKXSMQvMw
###

POST http://localhost:3001/auth/login
Content-Type: application/json

{
  "email":"maxi@mail.com",
  "password":"123456"
}

## REFRESH TOKENS
GET http://localhost:3001/refresh_token

###

DELETE http://localhost:3001/refresh_token

###

DELETE http://localhost:3001/users