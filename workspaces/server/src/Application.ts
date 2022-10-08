import cors from "@fastify/cors";
import middleware from "@fastify/middie";
import Fastify from "fastify";

import { buildRoutes } from "./routes";

export const main = async () => {
  const server = Fastify({ logger: true });
  await server.register(middleware);
  await server.register(cors, {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"],
  });

  buildRoutes(server);

  await server.listen({ port: 8080 });
  console.log("Server running at http://localhost:8080");
};
