import type { FastifyInstance } from "fastify";
import { authenticate } from "./controllers/authenticate";
import { register } from "./controllers/register";

export async function routes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/authenticate", authenticate);
}
