exports.up = (knex) => knex.schema
    .createTable('operation', (table) => {
        table.increments('id').primary().notNullable().unsigned();
        table.string('type', 60).notNullable();
        table.integer('cost').notNullable();
    });

exports.down = (knex) => knex.schema.dropTable('operation');
