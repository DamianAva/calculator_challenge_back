const tokenHelper = require('../helpers/token');
const userService = require('../services/user');

const authorize = () => async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            const error = new Error('No token provided');
            error.status = 401;
            error.code = 'MISSING_TOKEN';
            throw error;
        }

        const decodedUser = tokenHelper.verifyJwt(token);
        req.userInfo = decodedUser;
        await userService.getById(req.userInfo.id);

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    authorize,
};
