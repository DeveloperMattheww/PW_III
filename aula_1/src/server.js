import Fastify from 'fastify';
import { transactionRoutes } from './routes/transaction.routes.js';

const fastify = Fastify();

fastify.register(transactionRoutes, { prefix: "/transactions" });

fastify.get('/', async (request, reply) => {
  return {
    message: 'Hello, World!' };
});

fastify.get('/health', async (request, reply) => {
    return {
        status: "ok"
    }
});

fastify.listen({port: 3335}, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server is running on http://localhost:3335');
});

