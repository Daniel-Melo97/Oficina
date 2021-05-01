
exports.up = function(knex) {
    return knex.schema.createTable('pessoa', function(table){
        table.string('cpf').primary();
        table.string('nome_completo').notNullable();
        table.string('email').notNullable();
        table.string('senha',15).notNullable();
        table.boolean('isAdmin').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pessoa');
};
