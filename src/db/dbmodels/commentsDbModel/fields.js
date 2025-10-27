const sequelize = require('sequelize');

const fields = {
  id: {
    type: sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: 'comments id',
  },
  content: {
    type: sequelize.STRING(255),
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

  taskId: {
    type: sequelize.INTEGER.UNSIGNED,
    references: {
      model: 'tasks',
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
