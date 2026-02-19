import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/', async (request, reply) => {
  return {
    message: 'Hello, World!' };
});

fastify.get('/health', async (request, reply) => {
    return {
        status: "ok"
    }
});

fastify.listen({port: 3333}, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server is running on http://localhost:3333');
});

