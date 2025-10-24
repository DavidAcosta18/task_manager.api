const { Op } = require('sequelize');
const { userDbModel } = require('../../db/dbmodels');

module.exports.findById = async (id) => {
  const instance = await userDbModel.findOne({
    where: {
      id: { [Op.eq]: id },
    },
    raw: true,
  });

  return instance;
};

module.exports.findByMail = async (email) => {
  const instance = await userDbModel.findOne({
    where: {
      email: { [Op.eq]: email },
    },
    raw: true,
  });

  return instance;
};

module.exports.search = () => {
  return userDbModel.findAll({
    attributes: ['id', 'email', 'isEnabled'],
    raw: true,
  });
};

module.exports.create = async (data) => {
  const instance = await userDbModel.create(data);
  return instance.toJSON();
};

module.exports.update = async (id, data) => {
  await userDbModel.update(data, { where: { id: { [Op.eq]: id } } });
  return data;
};
