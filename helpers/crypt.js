const bcrypt = require('bcryptjs');

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const result = await bcrypt.hash(password, salt);
    return result;
};

const comparePassword = async (password, receivedPassword) => {
    const result = await bcrypt.compare(password, receivedPassword);
    return result;
};

module.exports = {
    encryptPassword,
    comparePassword,
};
