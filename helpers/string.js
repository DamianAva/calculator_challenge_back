const generateString = (length = 10) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const integers = '0123456789';
    const symbols = '!@#$%^&*_-=+';

    const chars = alpha + integers + symbols;

    let randomString = '';
    for (let i = 0; i < length; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return randomString;
};

module.exports = {
    generateString,
};
