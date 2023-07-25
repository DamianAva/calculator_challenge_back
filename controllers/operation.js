const operationService = require('../services/operation');
const recordService = require('../services/record');

const operate = async (req, res, next) => {
    try {
        const { operandOne, operandTwo, operator } = req.body;
        const { id, userBalance } = req.userInfo;

        if (operator === 'division' && operandTwo === 0) {
            const error = new Error('Division by zero');
            error.status = 400;
            error.code = 'INVALID_OPERAND';
            throw error;
        }

        let operationInfo = await operationService.getByType(operator);
        const operationResult = await operationService.operate(operandOne, operandTwo, operator);

        operationInfo = operationInfo.toJSON();

        await recordService
            .create(operationInfo.id, operationInfo.cost, operationResult, userBalance, id);

        res.status(200).json({
            status: 200,
            result: operationResult,
            cost: operationInfo.cost,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    operate,
};
