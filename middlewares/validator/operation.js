const { check } = require('express-validator');
const { errorHandler } = require('../errorHandler');

const login = [
    check('operandOne')
        .isFloat
        .withMessage('Operand must be a number'),

    check('operandTwo')
        .isFloat
        .withMessage('Operand must be a number'),

    check('operator')
        .notEmpty()
        .withMessage('You need to enter an operator')
        .bail()
        .isString()
        .withMessage('The operator has to be a string'),
    errorHandler,
];

module.exports = {
    login,
};
