var knex = require('../knex.js');

function Adresses() {
  return knex('adresses');
}

function insertAdresses(data_adresses){
    return Adresses().insert(data_adresses).returning('*');
}

module.exports = {
    insertAdresses: insertAdresses
};
