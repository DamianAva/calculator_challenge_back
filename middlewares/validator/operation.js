const { check } = require('express-validator');
const { errorHandler } = require('./validator');

const operate = [
    check('operandOne')
        .toFloat()
        .isFloat()
        .withMessage('Operand must be a number')
        .bail(),

    check('operandTwo')
        .toFloat()
        .isFloat()
        .withMessage('Operand must be a number')
        .bail(),

    check('operator')
        .notEmpty()
        .withMessage('You need to enter an operator')
        .bail()
        .isString()
        .withMessage('The operator has to be a string'),
    errorHandler,
];

module.exports = {
    operate,
};
