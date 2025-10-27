const connection = require('../../../common/connections/main');
const fields = require('./fields');

module.exports = connection.define('projects', fields);
