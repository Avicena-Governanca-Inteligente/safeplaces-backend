var knex = require('../knex.js');

function Person() {
  return knex('persons');
}

function insertPerson(dados_pessoa){
    return Person().insert(dados_pessoa).returning('*');
}

module.exports = {
    insertPerson: insertPerson
};
