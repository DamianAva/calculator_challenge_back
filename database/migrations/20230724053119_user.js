exports.up = (knex) => knex.schema
    .createTable('user', (table) => {
        table.increments('id').primary().notNullable().unsigned();
        table.string('username', 150).notNullable();
        table.string('password', 100).notNullable();
        table.enum('status', ['active', 'inactive']).notNullable();
    });

exports.down = (knex) => knex.schema.dropTable('user');
