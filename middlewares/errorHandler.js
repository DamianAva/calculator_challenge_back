const errorHandler = (error, req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        console.error(error.stack);
    }

    if (error.code === 'ERR_BAD_REQUEST') {
        const { status, data } = error.response;
        res.status(status).json({
            error: {
                status,
                message: data.message,
                code: error.code,
            },
        });
    } else if (error.code === 'ER_PARSE_ERROR' || error.code === 'ER_BAD_FIELD_ERROR' || error.code === 'ER_TOO_MANY_CONNECTIONS') {
        res.status(500).json({
            error: {
                status: 500,
                message: 'Database error',
                code: 'DATABASE_ERROR',
            },
        });
    } else {
        res.status(error.status || 500).json({
            error: {
                status: error.status || 500,
                message: error.message || 'Internal Server Error.',
                code: error.code || 'INTERNAL_SERVER_ERROR',
            },
        });
    }
};

module.exports = {
    errorHandler,
};
