const sequelize = require('sequelize');

const fields = {
  id: {
    type: sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: 'user id',
  },
  email: {
    type: sequelize.STRING(100),
    allowNull: false,
  },
  password: {
    type: sequelize.STRING(100),
    allowNull: false,
  },
  role: {
    type: sequelize.STRING(100),
    allowNull: false,
  },
  isEnabled: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
  },
};

module.exports = fields;
