const { request } = require('./request');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const integers = '0123456789';
const symbols = '!@#$%^&*_-=+';
const chars = alpha + integers + symbols;

const generateString = async (length = 10, amount = 1) => {
    const requestObj = JSON.stringify({
        jsonrpc: '2.0',
        method: 'generateStrings',
        params: {
            apiKey: '9d83a657-bc32-41b2-b1d3-ef75df44b4d3',
            n: amount,
            length,
            characters: chars,
            replacement: true,
        },
        id: 22,
    });

    const options = {
        hostname: process.env.RANDOM_URL,
        method: 'POST',
        path: '/json-rpc/4/invoke',
        port: 443,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(requestObj),
        },
    };

    const result = await request(requestObj, options);
    const parsed = JSON.parse(result.resp);

    if (!parsed || !parsed.result || !parsed.result.random) {
        const error = new Error('Random.org error');
        error.status = 500;
        error.code = 'RANDOM_SERVICE_ERROR';
        throw error;
    }

    return parsed.result.random.data;
};

module.exports = {
    generateString,
};
