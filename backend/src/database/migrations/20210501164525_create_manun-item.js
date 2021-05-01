
exports.up = function(knex) {
    return knex.schema.createTable('manun_item', function(table){
        table.increments();
        table.integer('id_manuntencao').notNullable();
        table.foreign('id_manuntencao')
            .references('id')
            .inTable('manuntencao')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('id_item').notNullable();
        table.foreign('id_item')
            .references('id')
            .inTable('item')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.integer('qtd').notNullable();



      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('manun_item');
};
