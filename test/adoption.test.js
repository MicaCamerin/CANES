
import "dotenv/config";
import * as chai from "chai";
import supertest from "supertest";
import mongoose from "mongoose";

import { UserModel } from "../src/models/user.model.js";
import { PetModel } from "../src/models/pet.model.js";

const expect = chai.expect;

const requester = supertest("http://localhost:8080");

describe("Tests Adoption Router", () => {

  let userId;
  let petId;

  before(async () => {
    // Conectar a DB de test
    await mongoose.connect(process.env.MONGO_URI);

    // Limpiar colecciones
    await UserModel.deleteMany({});
    await PetModel.deleteMany({});

    // Crear usuario fake
    const user = await UserModel.create({
      first_name: "Test",
      last_name: "User",
      email: "test@test.com",
      password: "123456",
      role: "user",
      pets: []
    });

    userId = user._id.toString();

    // Crear mascota fake
    const pet = await PetModel.create({
      name: "Firulais",
      type: "dog",
      age: 3
    });

    petId = pet._id.toString();
  });

  after(async () => {
    await mongoose.connection.close();
  });

  // ==========================
  // GET
  // ==========================
  it("Debe obtener todas las adopciones", async () => {

    const response = await requester.get("/api/adoptions");

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("success");
    expect(response.body.payload).to.be.an("array");
  });


  // ==========================
  // POST OK
  // ==========================
  it("Debe permitir adoptar una mascota", async () => {

    const response = await requester.post(
      `/api/adoptions/${userId}/${petId}`
    );

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("success");
  });


  // ==========================
  // POST ERROR
  // ==========================
  it("Debe fallar si el usuario no existe", async () => {

    const fakeId = "65a000000000000000000999";

    const response = await requester.post(
      `/api/adoptions/${fakeId}/${petId}`
    );

    expect(response.status).to.equal(404);
  });

});


