import { createTransactionController } from "../controllers/create-transaction.controller.js";
import { listTransactionsController } from "../controllers/list-transaction.controller.js";

/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 */

async function transactionRoutes(fastify) {

    fastify.post('/', createTransactionController);

    fastify.get('/', listTransactionsController);
}

export { transactionRoutes };