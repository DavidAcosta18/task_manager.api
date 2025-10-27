const sequelize = require('sequelize');

const fields = {
  id: {
    type: sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: 'Project members id',
  },
  isLeader: {
    type: sequelize.BOOLEAN(),
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

  userId: {
    type: sequelize.INTEGER.UNSIGNED,
    references: {
      model: 'users',
      key: 'id',
    },
    allowNull: false,
  },
  createdAt: {
    type: sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: sequelize.DATE,
    allowNull: false,
  },
};

module.exports = fields;
