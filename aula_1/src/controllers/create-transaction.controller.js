import { createTransactionService } from '../services/create-transaction.service.js';

/**
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */

async function createTransactionController(request, reply) {
    try {
        const data = request.body;
        const result = await createTransactionService(data);
        if (result) {
            return reply.status(201).send({ "message": "Transaction created successfully" });
        }
        return reply.status(400).send({ "message": "Validation error - Verify the data sent" });
    } catch (error) {
        console.error(error);
        return reply.status(500).send({ "message": "Internal server error" });
    }
}

export { createTransactionController };