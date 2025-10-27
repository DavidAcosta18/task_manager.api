/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    const tableFields = {
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
    return queryInterface.createTable('comments', tableFields);
  },

  async down(queryInterface) {
    return queryInterface.dropTable('comments');
  },
};
