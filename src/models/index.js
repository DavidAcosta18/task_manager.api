const { userRepository, projectsRepository, tasksRepository } = require('../repositories');
const User = require('./User');
const Projects = require('./Projects');
const Tasks = require('./Tasks');

module.exports = {
  User: User({ userRepository }),
  Projects: Projects({ projectsRepository }),
  Tasks: Tasks({ tasksRepository }),
};
