import { transactionRepository } from "../repositories/transaction.repository.js";

async function listTransactionService() {
    const transactions = await transactionRepository.list();
    return transactions;
}

export { listTransactionService };