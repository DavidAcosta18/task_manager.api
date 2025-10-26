const sequelize = require('sequelize');

const fields = {
  id: {
    type: sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: 'task id',
  },
  title: {
    type: sequelize.STRING(100),
    allowNull: false,
  },
  description: {
    type: sequelize.STRING(255),
    allowNull: false,
  },
  status: {
    type: sequelize.STRING(100),
    allowNull: false,
  },
  priority: {
    type: sequelize.STRING(100),
    allowNull: false,
  },
  dueDate: {
    type: sequelize.DATEONLY(),
    allowNull: false,
  },
  assigneeId: {
    type: sequelize.INTEGER.UNSIGNED,
    references: {
      model: 'users',
      key: 'id',
    },
    allowNull: false,
  },
  createdBy: {
    type: sequelize.INTEGER.UNSIGNED,
    references: {
      model: 'users',
      key: 'id',
    },
    allowNull: false,
  },
  projectId: {
    type: sequelize.INTEGER.UNSIGNED,
    references: {
      model: 'projects',
      key: 'id',
    },
    allowNull: false,
  },
};

module.exports = fields;
