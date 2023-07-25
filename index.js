const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const rootRouter = require('./routes/index');
const userRouter = require('./routes/user');
const operationRouter = require('./routes/operation');

const app = express();
app.use(cors());

/* const options = {
    swaggerOptions: {
        url: '/v3/api-docs',
    },
};
app.use('/api-docs', swaggerUI.serveFiles(null, options), swaggerUI.setup(null, options)); */

app.use(express.json());
// app.use(logger('dev'));

app.use('/', rootRouter);
app.use('/users', userRouter);
app.use('/operation', operationRouter);

/* Error handler */
app.use((req, res, next) => {
    const error = new Error('The requested resource doesn`t exists.');
    error.status = 404;
    next(error);
});

app.use(errorHandler);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}`);
});
