import fastify from "fastify";
const app = fastify();

app.get("/", async () => process.memoryUsage());

app.listen({
    port: 3001,
});
