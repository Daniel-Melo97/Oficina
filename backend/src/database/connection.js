const knex = require('knex');
const configuration = require('../../knexfile');

const config = configuration.development;

const connection = knex(config);

module.exports = connection;

//npx knex migrate:make create_table --criar migration  
//npx knex migrate:latest --criar tabela com banco select('*').from('user').where('id',valor)