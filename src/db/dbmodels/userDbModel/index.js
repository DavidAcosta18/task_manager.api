const connection = require('../../../common/connections/main');
const fields = require('./fields');

module.exports = connection.define('users', fields);
