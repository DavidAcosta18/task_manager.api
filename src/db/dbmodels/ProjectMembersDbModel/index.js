const connection = require('../../../common/connections/main');
const fields = require('./fields');

module.exports = connection.define('project_members', fields);
