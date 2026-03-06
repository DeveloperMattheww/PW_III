import { transactionRepository } from "../repositories/transaction.repository.js";

async function deleteTransactionService(id) {
    if (!id) {
        return false;
    }

    await transactionRepository.delete(id);

    return true;
}

export { deleteTransactionService };