const express = require('express');

const authController = require('../controllers/auth');
const recordController = require('../controllers/record');
const authMiddleware = require('../middlewares/authentification');
const validator = require('../middlewares/validator');

const userRouter = express.Router();

userRouter.post('/login', validator.auth.login, authController.login);
userRouter.get('/records', authMiddleware.authorize(), recordController.myRecords);
userRouter.delete('/records/:recordId(\\d+)', authMiddleware.authorize(), recordController.deleteRecord);

module.exports = userRouter;
