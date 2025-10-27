const connection = require('../../../common/connections/main');
const fields = require('./fields');

const Users = connection.define('users', fields);

module.exports = Users;
