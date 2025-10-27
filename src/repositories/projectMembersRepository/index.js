const { Op } = require('sequelize');
const { projectMembersDbModel } = require('../../db/dbmodels');

module.exports.findById = async (id) => {
  const instance = await projectMembersDbModel.findOne({
    where: {
      id: { [Op.eq]: id },
    },
    raw: true,
  });

  return instance;
};

module.exports.findOne = (projectId, userId) => {
  return projectMembersDbModel.findOne({
    where: { projectId: { [Op.eq]: projectId }, userId: { [Op.eq]: userId } },
    raw: true,
  });
};
module.exports.search = () => {
  return projectMembersDbModel.findAll({
    attributes: ['id', 'projectId', 'userId', 'isLeader'],
    raw: true,
  });
};

module.exports.create = async (data) => {
  const instance = await projectMembersDbModel.create(data);
  return instance.toJSON();
};

module.exports.update = async (id, data) => {
  await projectMembersDbModel.update(data, { where: { id: { [Op.eq]: id } } });
  return data;
};
