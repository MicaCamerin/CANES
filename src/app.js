import "dotenv/config";
import { connectMongoDB } from "./config/mongo.js";
import express from "express";
import mocksRouter from "./routes/mocks.router.js";
const app = express();

// Middleware para poder leer JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba (temporal)
app.get("/", (req, res) => {
  res.send("Servidor CANES funcionando");
});

// Puerto
const PORT = process.env.PORT || 8080;

app.use("/api/mocks", mocksRouter);

connectMongoDB();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});