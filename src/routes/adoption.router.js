import { Router } from "express";
import { UserModel } from "../models/user.model.js";
import { PetModel } from "../models/pet.model.js";

const router = Router();

/**
 * POST /api/adoptions/:uid/:pid
 * Adoptar una mascota
 */
router.post("/:uid/:pid", async (req, res) => {
  try {
    const { uid, pid } = req.params;

    const user = await UserModel.findById(uid);
    const pet = await PetModel.findById(pid);

    if (!user || !pet) {
      return res.status(404).json({
        status: "error",
        message: "Usuario o mascota no encontrada"
      });
    }

    user.pets.push(pet._id);
    await user.save();

    res.json({
      status: "success",
      message: "Mascota adoptada",
      user
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error en adopción"
    });
  }
});

/**
 * GET /api/adoptions
 * Listar adopciones
 */
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find().populate("pets");

    res.json({
      status: "success",
      payload: users
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error al obtener adopciones"
    });
  }
});

export default router;