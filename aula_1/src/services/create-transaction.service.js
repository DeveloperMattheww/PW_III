import { transactionRepository } from '../repositories/transaction.repository.js';

async function createTransactionService(data) {
    const { value, type, title } = data;

    if (!title || !value || !type) {
        return false;
    }

     if (type !== 'D' && type !== 'C') {
        return false;
    }

    await transactionRepository.create(data);

    return true;
}

export { createTransactionService };