const { Tasks, ProjectMembers } = require('../../models');
const { validatorService } = require('../../services');
const createTask = require('./createTask');
const getProjectTasks = require('./getProjectTasks');
const updateTaskStatus = require('./updateTaskStatus');

module.exports = {
  createTask: createTask({
    Tasks,
    validate: validatorService.validateForm,
  }),
  getProjectTasks: getProjectTasks({
    Tasks,
  }),
  updateTaskStatus: updateTaskStatus({
    Tasks,
    validate: validatorService.validateForm,
    ProjectMembers,
  }),
};
