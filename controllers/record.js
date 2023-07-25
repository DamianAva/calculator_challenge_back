const recordService = require('../services/record');

const myRecords = async (req, res, next) => {
    try {
        const {
            page,
            limit,
            sort,
            order,
            recordId,
            operationId,
            operationType,
        } = req.query;
        const filters = {};

        if (recordId) filters.id = recordId;
        if (operationId) filters.operationId = operationId;
        if (operationType) filters.operationId = operationType;

        const { id } = req.userInfo;

        const records = await recordService.getByUserId(id, page, limit, filters, sort, order);

        res.status(200).json({
            status: 200,
            records,
        });
    } catch (error) {
        next(error);
    }
};

const deleteRecord = async (req, res, next) => {
    try {
        const { recordId } = req.params;
        const { id } = req.userInfo;

        await recordService.deleteById(recordId, id);

        res.status(204).json({
            status: 204,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    myRecords,
    deleteRecord,
};
