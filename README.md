# CANES — Backend III

Proyecto desarrollado para la Entrega N°1 del curso Backend III (Coderhouse).

El objetivo del proyecto es implementar un sistema de mocking de datos, generación masiva de usuarios y mascotas, y persistencia real en MongoDB, utilizando Express y Mongoose.

--------------------------

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB
- MongoDB Compass
- Mongoose
- Faker (generación de datos mock)
- Bcrypt (encriptación de contraseñas)
- Dotenv (variables de entorno)

--------------------------

## Estructura del proyecto
CANES/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── mongo.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── pet.model.js
│   ├── routes/
│   │   └── mocks.router.js
│   ├── utils/
│   │   ├── mockingUsers.js
│   │   └── mockingPets.js
├── .env
├── package.json
└── README.md

--------------------------

## Variables de entorno

El proyecto utiliza un archivo .env con las siguientes variables:

PORT=8080
MONGO_URI=mongodb://localhost:27017/canes

El archivo .env no se versiona y debe existir localmente para que el proyecto funcione.

--------------------------

## Puesta en marcha

### Instalar dependencias:

 - npm install

Verificar que MongoDB esté corriendo en local.

### Levantar el servidor:

- node src/app.js

El servidor quedará escuchando en:

http://localhost:8080

## Endpoints disponibles
🔹 Ruta base
GET /
Respuesta:
Servidor CANES funcionando

🔹 Mocking de usuarios
GET /api/mocks/mockingusers

Funcionalidad:
- Genera 50 usuarios mock
- Contraseña encriptada (coder123)
- Roles aleatorios (user | admin)
- Array de mascotas vacío
- Formato compatible con MongoDB

🔹 Mocking de mascotas
GET /api/mocks/mockingpets
Genera mascotas mock para pruebas

🔹 Generación e inserción de datos en la base
POST /api/mocks/generateData
Body (JSON):
{
  "users": 5,
  "pets": 10
}

Funcionalidad:
- Genera la cantidad indicada de usuarios y mascotas
- Inserta los documentos en MongoDB
- Los datos pueden verificarse desde MongoDB Compass

--------------------------

Proyecto desarrollado por Micaela Julieta Camerini para el curso Backend III — Coderhouse.