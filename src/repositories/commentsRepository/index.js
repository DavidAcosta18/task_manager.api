const { Op } = require('sequelize');
const { commentsDbModel } = require('../../db/dbmodels');

module.exports.findById = async (id) => {
  const instance = await commentsDbModel.findOne({
    where: {
      id: { [Op.eq]: id },
    },
    raw: true,
  });

  return instance;
};

module.exports.search = () => {
  return commentsDbModel.findAll({
    attributes: ['id', 'content', 'taskId', 'userId', 'createdAt'],
    raw: true,
  });
};

module.exports.create = async (data) => {
  const instance = await commentsDbModel.create(data);
  return instance.toJSON();
};

module.exports.update = async (id, data) => {
  await commentsDbModel.update(data, { where: { id: { [Op.eq]: id } } });
  return data;
};
