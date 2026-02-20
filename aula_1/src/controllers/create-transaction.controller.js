/**
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */

async function createTransactionController(request, reply) {
    const payload = request.body;
    console.log(payload);
    return reply.status(201).send({
        message: 'Transaction created successfully',
        data: payload
    });
}

export { createTransactionController };