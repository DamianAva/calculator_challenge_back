const https = require('https');

const request = (data, options) => new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
        res.setEncoding('utf8');
        let responseBody = '';

        res.on('data', (chunk) => {
            responseBody += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200) {
                resolve({ resp: responseBody });
            } else {
                reject(new Error(responseBody));
            }
        });
    });

    req.on('error', (err) => {
        reject(err);
    });

    req.write(data);
    req.end();
});

module.exports = {
    request,
};
