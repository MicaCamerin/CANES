import { Router } from "express";
import { generateMockUsers } from "../utils/mockingUsers.js";
import { UserModel } from "../models/user.model.js";
import { PetModel } from "../models/pet.model.js";
import { generateMockPets } from "../utils/mockingPets.js";
const router = Router();

/**
 * GET /api/mocks/mockingpets
 * Endpoint mock para generar pets (temporal)
 */
router.get("/mockingpets", (req, res) => {
  const pets = [];

  for (let i = 0; i < 10; i++) {
    pets.push({
      name: `Pet ${i + 1}`,
      type: "dog",
      age: Math.floor(Math.random() * 10) + 1
    });
  }

  res.json({
    status: "success",
    payload: pets
  });
});

/**
 * GET /api/mocks/mockingusers
 * Genera 50 usuarios mock
 */
router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers(50);

  res.json({
    status: "success",
    payload: users
  });
});

/**
 * POST /api/mocks/generateData
 * Genera e inserta users y pets en la DB
 */
router.post("/generateData", async (req, res) => {
  try {
    const { users, pets } = req.body;

    if (!users || !pets) {
      return res.status(400).json({
        status: "error",
        message: "Debe enviar users y pets"
      });
    }

    // Generar mocks
    const mockUsers = generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    // Insertar en Mongo
    await UserModel.insertMany(mockUsers);
    await PetModel.insertMany(mockPets);

    res.json({
      status: "success",
      message: "Datos generados e insertados correctamente",
      usersInserted: users,
      petsInserted: pets
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Error al generar datos"
    });
  }
});

export default router;