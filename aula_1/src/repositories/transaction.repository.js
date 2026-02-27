import { database } from '../configs/database.js';

class transactionRepository {
    static async create(data) {

        const {value, type, title} = data;
        const query = 'INSERT INTO transacao VALUES(0, ?, ?, NOW(), ?)';
        await database.raw(query, [value, type, title]);
    }

    static async list(data) {
        const query = "select id as 'ID', valor as 'Valor', tipo as 'Tipo', data_hora as 'Data e Hora', titulo as 'Título' from transacao";
        const [transactions] = await database.raw(query);
        return transactions;
    }
}

export { transactionRepository };