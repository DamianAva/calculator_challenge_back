const jwt = require('jsonwebtoken');
const util = require('util');

const signJwt = util.promisify(jwt.sign);

const generateToken = async (req, user) => {
    const userForToken = {
        id: user.attributes.id,
        email: user.attributes.email,
    };

    const token = await signJwt(userForToken, process.env.SECRET_TOKEN, {
        expiresIn: process.env.JWT_EXPIRATION * 1000,
    });

    return token;
};

const verifyJwt = (token) => {
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        return decodedToken;
    } catch (error) {
        if (error.message === 'jwt expired') {
            const newError = new Error('JWT Expired');
            newError.status = 403;
            newError.code = 'TOKEN_EXPIRED';
            throw newError;
        }
        throw error;
    }
};

module.exports = {
    generateToken,
    verifyJwt,
};
