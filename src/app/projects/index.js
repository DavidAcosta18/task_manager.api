const { Projects, ProjectMembers } = require('../../models');
const { validatorService } = require('../../services');
const { projectsRepository } = require('../../repositories');

const createProject = require('./createProject');
const addMember = require('./addMember');
const getProjects = require('./getProjects');

module.exports = {
  createProject: createProject({
    validate: validatorService.validateForm,
    Projects,
  }),
  addMember: addMember({
    validate: validatorService.validateForm,
    ProjectMembers,
  }),
  getProjects: getProjects({
    projectsRepository,
  }),
};
