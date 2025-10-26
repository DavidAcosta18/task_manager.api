const { Tasks } = require('../../models');
const { validatorService } = require('../../services');
const createTask = require('./createTask');

module.exports = {
  createTask: createTask({
    Tasks,
    validate: validatorService.validateForm,
  }),
};
