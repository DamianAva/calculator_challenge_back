const userRepository = require('../repositories/user');

const existUser = async (username) => {
    const user = await userRepository.getByUsername(username);
    if (!user) {
        const error = new Error('Username not found');
        error.status = 404;
        error.code = 'INVALID_USER';
        throw error;
    }
    return user;
};

const getById = async (id) => {
    const user = await userRepository.getById(id);
    if (!user) {
        const error = new Error('The requested user doesnt exist');
        error.status = 404;
        error.code = 'USER_NOT_FOUND';
        throw error;
    }

    const userResponse = {
        id: user.attributes.userId,
        username: user.attributes.email,
    };

    return userResponse;
};

module.exports = {
    existUser,
    getById,
};
