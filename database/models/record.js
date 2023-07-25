const bookshelf = require('../bookshelf');
const User = require('./user');
const Operation = require('./operation');

module.exports = bookshelf.model('Record', {
    tableName: 'record',
    soft: ['deleted_at'],
    user() {
        return this.belongsTo(User);
    },
    operation() {
        return this.belongsTo(Operation);
    },
});
