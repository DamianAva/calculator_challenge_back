const bookshelf = require('../bookshelf');
const Record = require('./record');

module.exports = bookshelf.model('User', {
    tableName: 'user',
    hidden: ['password'],
    record() {
        return this.hasMany(Record);
    },
});
