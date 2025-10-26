const {
  userRepository,
  projectsRepository,
  tasksRepository,
  commentsRepository,
  projectMembersRepository,
} = require('../repositories');
const User = require('./User');
const Projects = require('./Projects');
const Tasks = require('./Tasks');
const Comments = require('./Comments');
const ProjectMembers = require('./ProjectMembers');

module.exports = {
  User: User({ userRepository }),
  Projects: Projects({ projectsRepository }),
  Tasks: Tasks({ tasksRepository }),
  Comments: Comments({ commentsRepository }),
  ProjectMembers: ProjectMembers({ projectMembersRepository }),
};
