const { userRepository, projectsRepository } = require('../repositories');
const User = require('./User');
const Projects = require('./Projects');

module.exports = {
  User: User({ userRepository }),
  Projects: Projects({ projectsRepository }),
};
