const { validationResult } = require('express-validator');

const errorHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorDetail = errors.array().map((err) => ({
            msg: err.msg,
            param: err.param,
        }));
        const errorResult = {
            code: 'INVALID_REQUEST',
            message: 'Invalid input data',
            status: 400,
            detail: errorDetail,
        };
        res.status(400).json({ error: errorResult });
        return;
    }
    next();
};

module.exports = {
    errorHandler,
};
