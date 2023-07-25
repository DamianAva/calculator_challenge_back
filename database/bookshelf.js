const knex = require('knex')(require('./config')[process.env.NODE_ENV || 'development']);

const bookshelf = require('bookshelf')(knex);
// eslint-disable-next-line import/no-extraneous-dependencies
bookshelf.plugin(require('bookshelf-soft-delete'));

module.exports = bookshelf;
