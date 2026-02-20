/**
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */

async function listTransactionsController(request, reply) {
    return reply.status(200).send({
        message: 'Transactions listed successfully'
    });
}

export { listTransactionsController };