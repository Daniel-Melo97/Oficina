
exports.up = function(knex) {
    return knex.schema.createTable('manuntencao', function(table){
        table.increments();
        table.decimal('valor_total');
        table.string('status').notNullable();
        table.boolean('pago').notNullable();
        
        
        table.string('placa_carro').notNullable();
        table.foreign('placa_carro')
            .references('placa')
            .inTable('carro')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('manuntencao');
};
