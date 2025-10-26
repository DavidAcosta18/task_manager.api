const { Projects, ProjectMembers } = require('../../models');
const { validatorService } = require('../../services');

const createProject = require('./createProject');
const addMember = require('./addMember');

module.exports = {
  createProject: createProject({
    validate: validatorService.validateForm,
    Projects,
  }),
  addMember: addMember({
    validate: validatorService.validateForm,
    ProjectMembers,
  }),
};
