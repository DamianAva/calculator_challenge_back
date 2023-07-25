const Operation = require('../database/models/operation');

const getById = async (id) => {
    const operationFound = await new Operation({ id }).fetch({ require: false });
    return operationFound;
};

const getByType = async (type) => {
    const operationFound = await new Operation({ type }).fetch({ require: false });
    return operationFound;
};

module.exports = {
    getById,
    getByType,
};
