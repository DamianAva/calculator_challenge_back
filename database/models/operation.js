const bookshelf = require('../bookshelf');

module.exports = bookshelf.model('Operation', {
    tableName: 'operation',
    hasTimestamps: false,
});
