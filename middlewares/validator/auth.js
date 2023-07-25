const { check } = require('express-validator');
const { errorHandler } = require('../errorHandler');

const login = [
    check('username')
        .notEmpty()
        .withMessage('You need to enter an email')
        .bail()
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid email. Ej:name@mail.com')
        .bail(),

    check('password')
        .notEmpty()
        .withMessage('You need to enter a password')
        .bail()
        .isLength({ min: 6 })
        .withMessage('The password must be at lest 6 characters long')
        .bail(),
    errorHandler,
];

module.exports = {
    login,
};
