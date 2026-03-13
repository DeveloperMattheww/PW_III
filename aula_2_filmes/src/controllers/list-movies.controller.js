import { listMoviesService } from '../services/list-movies.service.js';

async function listMoviesController(request, reply) {
    try {
        const movies = await listMoviesService();
        return reply.status(200).send(movies);
    } catch (error) {
        console.error(error);
        return reply.status(500).send({ "message": "Internal server error" });
    }
}

export { listMoviesController };