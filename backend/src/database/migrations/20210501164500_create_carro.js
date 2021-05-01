
exports.up = function(knex) {
    return knex.schema.createTable('carro', function(table){
        table.string('placa').primary();
        table.string('marca').notNullable();
        table.string('modelo').notNullable();
        table.integer('ano').notNullable();
        
        
        table.string('cpf_pessoa').notNullable();
        table.foreign('cpf_pessoa').references('cpf').inTable('pessoa');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('carro');
};
