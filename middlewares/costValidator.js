const recordService = require('../services/record');
const operationService = require('../services/operation');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const valid = () => async (req, res, next) => {
    try {
        const { id } = req.userInfo;
        const { operator } = req.body;

        const lastRecord = await recordService.getLastByUserId(id);

        const userBalance = lastRecord ? lastRecord.user_balance : process.env.INITIAL_CREDIT;
        let operation = await operationService.getByType(operator);

        if (!operation) {
            const error = new Error('Invalid operation');
            error.status = 401;
            error.code = 'INVALID_OPERATION';
            throw error;
        }

        operation = operation.toJSON();

        if (userBalance < operation.cost) {
            const error = new Error('Not enough credit');
            error.status = 403;
            error.code = 'LOW_CREDIT';
            throw error;
        }

        req.userInfo.userBalance = userBalance;

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    valid,
};
