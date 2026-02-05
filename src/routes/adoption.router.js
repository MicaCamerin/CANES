
import { Router } from "express";
import { UserModel } from "../models/user.model.js";
import { PetModel } from "../models/pet.model.js";

const router = Router();

// GET /api/adoptions
router.get("/", async (req, res) => {
  try {
    res.send({
      status: "success",
      payload: []
    });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

// POST /api/adoptions/:uid/:pid
router.post("/:uid/:pid", async (req, res) => {
  try {
    const { uid, pid } = req.params;

    const user = await UserModel.findById(uid);
    if (!user) {
      return res.status(404).send({ status: "error", error: "User not found" });
    }

    const pet = await PetModel.findById(pid);
    if (!pet) {
      return res.status(404).send({ status: "error", error: "Pet not found" });
    }

    user.pets.push(pet._id);
    await user.save();

    res.send({ status: "success" });

  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

export default router;