import { transactionRepository } from "../repositories/transaction.repository.js";

/**
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */

async function deleteTransactionController(request, reply) {
    try {
        const id = request.params.id;
        if (!id) {
            return reply.status(400).send({ "message": "Invalid transaction ID" });
        }
        await transactionRepository.delete(id);
        return reply.status(200).send({ "message": "Transaction deleted successfully" });
    } catch (error) {
        return reply.status(500).send({ "message": "Internal server error" });
    }
}

export { deleteTransactionController };