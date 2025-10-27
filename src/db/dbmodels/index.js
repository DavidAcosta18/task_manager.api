const userDbModel = require('./userDbModel');
const projectsDbModel = require('./projectsDbModel');
const tasksDbModel = require('./tasksDbModel');
const commentsDbModel = require('./commentsDbModel');
const projectMembersDbModel = require('./ProjectMembersDbModel');

userDbModel.hasMany(tasksDbModel, {
  as: 'tasks',
  foreignKey: 'assigneeId',
});

tasksDbModel.belongsTo(userDbModel, {
  as: 'assignee',
  foreignKey: 'assigneeId',
});

module.exports = {
  userDbModel,
  projectsDbModel,
  tasksDbModel,
  commentsDbModel,
  projectMembersDbModel,
};
