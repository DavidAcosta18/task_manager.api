const { Op } = require('sequelize');
const { tasksDbModel, userDbModel, commentsDbModel } = require('../../db/dbmodels');

module.exports.findById = async (id) => {
  const instance = await tasksDbModel.findAll({
    where: {
      id: { [Op.eq]: id },
    },
    include: [
      {
        model: commentsDbModel,
        as: 'comments',
        attributes: ['id', 'content', 'createdAt', 'userId'],
        include: [
          {
            model: userDbModel,
            as: 'author',
            attributes: ['id', 'firstName', 'lastName', 'email', 'role'],
          },
        ],
      },
    ],
  });

  return instance;
};

module.exports.search = () => {
  return tasksDbModel.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'status',
      'priority',
      'isEnabled',
      'projectId',
      'assigneeId',
      'dueDate',
      'createdBy',
    ],
  });
};

module.exports.create = async (data) => {
  const instance = await tasksDbModel.create(data);
  return instance.toJSON();
};

module.exports.findByProject = async (projectId) => {
  return tasksDbModel.findAll({
    where: { projectId: { [Op.eq]: projectId } },
    include: [
      {
        model: userDbModel,
        as: 'assignee',
        attributes: ['id', 'firstName', 'lastName', 'email', 'role'],
      },
    ],
  });
};

module.exports.update = async (id, data) => {
  await tasksDbModel.update(data, { where: { id: { [Op.eq]: id } } });
  return data;
};
