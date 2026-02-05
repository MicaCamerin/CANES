# CANES — Backend III

Proyecto desarrollado para la Entrega Final del curso Backend III (Coderhouse).

El objetivo del proyecto es implementar un sistema de gestión de usuarios y adopciones, con documentación, tests funcionales y despliegue mediante Docker.

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Faker
- Bcrypt
- Dotenv
- Swagger
- Mocha / Chai / Supertest
- Docker

---

## 📁 Estructura del proyecto

CANES/
├── src/
│   ├── config/
│   │   └── mongo.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── pet.model.js
│   ├── routes/
│   │   ├── mocks.router.js
│   │   └── adoption.router.js
│   ├── utils/
│   │   ├── mockingUsers.js
│   │   └── mockingPets.js
│   └── docs/
│       └── users.yaml
├── app.js
├── test/
│   └── adoption.test.js
├── .env
├── Dockerfile
├── package.json
└── README.md

---

## Variables de entorno

El proyecto utiliza un archivo `.env` con las siguientes variables:

PORT=8080
MONGO_URI=mongodb://localhost:27017/canes

El archivo .env no se versiona y debe existir localmente para que el proyecto funcione.

--------------------------

## Puesta en marcha

### Instalar dependencias:

 - npm install

### Levantar el servidor:

- npm start

El servidor quedará escuchando en:

http://localhost:8080

## Documentación con Swagger
La documentación de la API se encuentra disponible en:
http://localhost:8080/api/docs
Incluye la documentación del módulo Users.

## Tests
Los tests del módulo de adopciones se ejecutan con:
- npm test
Incluyen casos de éxito y error para todos los endpoints del router adoption.router.js.

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

🔹 Adopciones
POST /api/adoptions/:uid/:pid
GET /api/adoptions

Funcionalidad:
- Permite gestionar adopciones de mascotas.

--------------------------

## Docker

### DoImagen en DockerHub
La imagen del proyecto se encuentra publicada en:
https://hub.docker.com/r/micaelacamerin/canes-backend

### Ejecutar con Docker

1. Descargar Imagen
docker pull micaelacamerin/canes-backend:1.0

2. Ejecutar el contenedor:
docker run -p 8080:8080 --env-file .env micaelacamerin/canes-backend:1.0

3. Acceder a la aplicación:
http://localhost:8080

--------------------------

Proyecto desarrollado por Micaela Julieta Camerini para el curso Backend III — Coderhouse.