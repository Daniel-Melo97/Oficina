
exports.up = function(knex) {
    return knex.schema.createTable('item', function(table){
        table.increments();
        table.decimal('preco').notNullable();
        table.string('titulo').notNullable();
        table.text('descricao').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('item');
};
