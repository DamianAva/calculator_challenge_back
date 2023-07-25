const Record = require('../database/models/record');

const getByUserId = async (userId, offset, limit, filters, sort, order = 'asc') => {
    const {
        id,
        operationId,
        operationResponse,
    } = filters;

    const records = await new Record().query((qb) => {
        qb.select('*');
        qb.andWhere('record.user_id', '=', userId);
        if (id) qb.andWhere('record.id', '=', id);
        if (operationId) qb.andWhere('record.operation_id', '=', operationId);
        if (operationResponse) qb.andWhere('record.operation_response', '=', operationResponse);
        if (sort) {
            qb.orderBy(`record.${sort}`, order);
        }
    }).fetchPage({
        limit,
        offset,
    });

    return records;
};

const getLastByUserId = async (id) => {
    const recordFound = await new Record({ user_id: id }).orderBy('id', 'DESC').fetch({ require: false });
    return recordFound ? recordFound.toJSON() : null;
};

const create = async (newRecord) => {
    const resRecord = await new Record().save(newRecord);
    return resRecord;
};

const deleteById = async (recordId, userId) => {
    const result = await new Record({ user_id: userId, id: recordId }).destroy();
    return result;
};

module.exports = {
    getByUserId,
    create,
    getLastByUserId,
    deleteById,
};
