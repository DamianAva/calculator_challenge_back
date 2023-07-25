exports.seed = async (knex) => {
    await knex('operation').del();
    await knex('operation').insert([
        {
            id: 1,
            type: 'addition',
            cost: 1,
        },
        {
            id: 2,
            type: 'subtraction',
            cost: 1,
        },
        {
            id: 3,
            type: 'multiplication',
            cost: 3,
        },
        {
            id: 4,
            type: 'division',
            cost: 5,
        },
        {
            id: 5,
            type: 'square_root',
            cost: 10,
        },
        {
            id: 6,
            type: 'random_string',
            cost: 15,
        },
    ]);
};
