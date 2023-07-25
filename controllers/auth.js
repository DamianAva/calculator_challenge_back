const userService = require('../services/user');
const cryptHelper = require('../helpers/crypt');
const tokenHelper = require('../helpers/token');

const User = require('../database/models/user');

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const userFound = await userService.existUser(username);
        const match = await cryptHelper.comparePassword(password, userFound.attributes.password);

        if (!match) {
            const error = new Error('Invalid password');
            error.status = 400;
            error.code = 'INVALID_PASSWORD';
            throw error;
        }

        const token = await tokenHelper.generateToken(req, userFound);
        res.status(200).json({
            accessToken: token,
            user: userFound,
        });
        await new User({ id: userFound.attributes.id }).save({ last_login: new Date() });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
};
