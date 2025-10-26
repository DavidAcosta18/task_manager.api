const { Op } = require('sequelize');
const { tasksDbModel } = require('../../db/dbmodels');

module.exports.findById = async (id) => {
  const instance = await tasksDbModel.findOne({
    where: {
      id: { [Op.eq]: id },
    },
    raw: true,
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
    raw: true,
  });
};

module.exports.create = async (data) => {
  const instance = await tasksDbModel.create(data);
  return instance.toJSON();
};

module.exports.update = async (id, data) => {
  await tasksDbModel.update(data, { where: { id: { [Op.eq]: id } } });
  return data;
};
