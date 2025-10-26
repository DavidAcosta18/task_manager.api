const sequelize = require('sequelize');

const fields = {
  id: {
    type: sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: 'project id',
  },
  name: {
    type: sequelize.STRING(100),
    allowNull: false,
  },
  description: {
    type: sequelize.STRING(255),
    allowNull: false,
  },
  customColor: {
    type: sequelize.STRING(100),
    allowNull: false,
  },
  isActive: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
  },
  startDate: {
    type: sequelize.DATEONLY,
    allowNull: false,
  },
  endDate: {
    type: sequelize.DATEONLY,
    allowNull: false,
  },
  leaderId: {
    type: sequelize.INTEGER.UNSIGNED,
    references: {
      model: 'users',
      key: 'id',
    },
    allowNull: false,
  },
};

module.exports = fields;
