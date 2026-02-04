import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import "dotenv/config";
import { connectMongoDB } from "./config/mongo.js";
import express from "express";
import mocksRouter from "./routes/mocks.router.js";
import adoptionRouter from "./routes/adoption.router.js";
const app = express();

// Middleware para poder leer JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "API CANES",
      description: "Documentación del proyecto final Backend III"
    }
  },
  apis: ["./src/docs/*.yaml"]
};

const specs = swaggerJSDoc(swaggerOptions);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

// Ruta de prueba (temporal)
app.get("/", (req, res) => {
  res.send("Servidor CANES funcionando");
});

// Puerto
const PORT = process.env.PORT || 8080;

app.use("/api/mocks", mocksRouter);
app.use("/api/adoptions", adoptionRouter);

connectMongoDB();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});