const User = require('../database/models/user');

const getByUsername = async (username) => {
    const userFound = await new User({ username }).fetch({ require: false });
    return userFound;
};

const getById = async (id) => {
    const userFound = await new User({ id }).fetch({ require: false });
    return userFound;
};

module.exports = {
    getByUsername,
    getById,
};
