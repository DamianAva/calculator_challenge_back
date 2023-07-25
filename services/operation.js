const operationRepository = require('../repositories/operation');
const { generateString } = require('./random');
const mathHelper = require('../helpers/math');
const { operators } = require('../constants');

const getById = async (id) => {
    const operation = await operationRepository.getById(id);

    if (!operation) {
        const error = new Error('Invalid Operation ID');
        error.status = 404;
        error.code = 'OPERATION_NOT_FOUND';
        throw error;
    }

    return operation;
};

const getByType = async (type) => {
    const operation = await operationRepository.getByType(type);

    if (!operation) {
        const error = new Error('Invalid Operation Type');
        error.status = 404;
        error.code = 'OPERATION_NOT_FOUND';
        throw error;
    }

    return operation;
};

const getAll = async () => {
    return operationRepository.getAll();
};

const operate = async (operandOne, operandTwo, operator) => {
    const operatorName = operators[operator];

    if (operator === 'random_string') {
        return generateString(operandOne, operandTwo);
    }

    return mathHelper[operatorName](operandOne, operandTwo);
};

module.exports = {
    getById,
    getByType,
    getAll,
    operate,
};
