const connection = require('../../../common/connections/main');
const fields = require('./fields');

const Tasks = connection.define('tasks', fields);

module.exports = Tasks;
