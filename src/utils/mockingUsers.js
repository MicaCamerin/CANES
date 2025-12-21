import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

const SALT_ROUNDS = 10;

export const generateMockUsers = (quantity) => {
  const users = [];

  const hashedPassword = bcrypt.hashSync("coder123", SALT_ROUNDS);

  for (let i = 0; i < quantity; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: Math.random() < 0.5 ? "user" : "admin",
      pets: []
    });
  }

  return users;
};