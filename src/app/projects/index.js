const { Projects } = require('../../models');
const { validatorService } = require('../../services');

const createProject = require('./createProject');

module.exports = {
  createProject: createProject({
    validate: validatorService.validateForm,
    Projects,
  }),
};
