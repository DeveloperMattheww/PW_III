/**
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */

import { listTransactionService } from '../services/list-transaction.service.js';

async function listTransactionsController(request, reply) {
    try {
        const transactions = await listTransactionService();
        return reply.status(200).send(transactions);
    } catch (error) {
        console.error(error);
        return reply.status(500).send({ "message": "Internal server error" });
    }
}

export { listTransactionsController };