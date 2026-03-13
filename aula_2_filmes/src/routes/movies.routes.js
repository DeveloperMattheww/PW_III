import { listMoviesController } from "../controllers/list-movies.controller.js";

async function moviesRoutes(fastify) {

    fastify.get('/list', listMoviesController);
}

export { moviesRoutes };