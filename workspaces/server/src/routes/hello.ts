import type { FastifyInstance } from "fastify";

export const buildHelloWorldRoutes = async (server: FastifyInstance) => {
  server.get("/world", async () => {
    return {
      hello: "world",
    };
  });
};
