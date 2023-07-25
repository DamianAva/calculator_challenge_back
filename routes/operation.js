const express = require('express');

const operationController = require('../controllers/operation');
const costController = require('../middlewares/costValidator');
const authMiddleware = require('../middlewares/authentification');
const validator = require('../middlewares/validator');

const operationRouter = express.Router();

operationRouter.post('/', validator.operation.operate, authMiddleware.authorize(), costController.valid(), operationController.operate);

module.exports = operationRouter;
