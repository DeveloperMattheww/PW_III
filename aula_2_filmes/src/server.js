import Fastify from 'fastify';

import { moviesRoutes } from './routes/movies.routes.js';

const fastify = Fastify();

fastify.register(moviesRoutes, { prefix: "/movies" });

fastify.get('/', async () => {
    return {
        message: 'Welcome to the HomeCinemaStreaming API!'
    };
});

async function start() {
    try {
        await fastify.listen({ port: 3333 });
        console.log('Server is running!');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start(); 