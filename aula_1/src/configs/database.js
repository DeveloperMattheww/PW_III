import knex from 'knex';

const database = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: "root",
    password: "",
    database: "aula_1"
  },
});

export default database;