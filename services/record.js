const recordRepository = require('../repositories/record');

const getByUserId = async (userId, page = 0, limit = 10, filtersRecords, sort, order) => {
    const offset = page * limit;
    const filters = filtersRecords || {};

    return recordRepository.getByUserId(userId, offset, limit, filters, sort, order);
};

const getLastByUserId = async (userId) => {
    return recordRepository.getLastByUserId(userId);
};

const create = async (operationId, operationCost, operationResult, userBalance, userId) => {
    const newRecord = {
        operation_id: operationId,
        user_id: userId,
        amount: operationCost,
        operation_response: JSON.stringify(operationResult),
        user_balance: (userBalance - operationCost),
    };

    return recordRepository.create(newRecord);
};

const deleteById = async (recordId, userId) => {
    return recordRepository.deleteById(recordId, userId);
};

module.exports = {
    getByUserId,
    deleteById,
    getLastByUserId,
    create,
};
