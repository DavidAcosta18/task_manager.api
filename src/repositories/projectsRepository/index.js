const { Op } = require('sequelize');
const { projectsDbModel } = require('../../db/dbmodels');

module.exports.search = () => {
  return projectsDbModel.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'customColor',
      'isActive',
      'startDate',
      'endDate',
      'leaderId',
    ],
    raw: true,
  });
};

module.exports.findById = (id) => {
  return projectsDbModel.findAll({
    where: { leaderId: { [Op.eq]: id } },
    attributes: [
      'id',
      'name',
      'description',
      'customColor',
      'isActive',
      'startDate',
      'endDate',
      'leaderId',
    ],
    raw: true,
  });
};

module.exports.create = async (data) => {
  const instance = await projectsDbModel.create(data);
  return instance.toJSON();
};

module.exports.update = async (id, data) => {
  await projectsDbModel.update(data, { where: { id: { [Op.eq]: id } } });
  return data;
};
