import { createTransactionService } from '../services/create-transaction.service.js';

/**
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */

async function createTransactionController(request, reply) {
    const data = request.body;
    await createTransactionService(data);
    return reply.status(201).send({
        message: 'Transaction created successfully'
    });
}

export { createTransactionController };