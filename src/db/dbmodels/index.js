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

tasksDbModel.hasMany(commentsDbModel, {
  as: 'comments',
  foreignKey: 'taskId',
});

commentsDbModel.belongsTo(tasksDbModel, {
  as: 'task',
  foreignKey: 'taskId',
});

userDbModel.hasMany(commentsDbModel, {
  as: 'comments',
  foreignKey: 'userId',
});

commentsDbModel.belongsTo(userDbModel, {
  as: 'author',
  foreignKey: 'userId',
});

module.exports = {
  userDbModel,
  projectsDbModel,
  tasksDbModel,
  commentsDbModel,
  projectMembersDbModel,
};
