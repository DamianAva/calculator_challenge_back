exports.up = (knex) => knex.schema
    .createTable('record', (table) => {
        table.increments('id').primary().notNullable().unsigned();
        table.integer('operation_id').unsigned();
        table.foreign('operation_id')
            .references('id')
            .inTable('operation')
            .onDelete('SET NULL')
            .onUpdate('CASCADE');
        table.integer('user_id').unsigned();
        table.foreign('user_id')
            .references('id')
            .inTable('user')
            .onDelete('SET NULL')
            .onUpdate('CASCADE');
        table.integer('amount').notNullable();
        table.integer('user_balance').notNullable();
        table.string('operation_response', 500).notNullable();
    });

exports.down = (knex) => knex.schema.dropTable('record');
