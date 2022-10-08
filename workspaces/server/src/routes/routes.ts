import type { FastifyInstance } from "fastify";

import { buildHelloWorldRoutes } from "./hello";

export const buildRoutes = async (server: FastifyInstance) => {
  server.register(buildHelloWorldRoutes, { prefix: "/hello" });
};
