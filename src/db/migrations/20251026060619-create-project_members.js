/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    const tableFields = {
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

    return queryInterface.createTable('project_members', tableFields);
  },

  async down(queryInterface) {
    return queryInterface.dropTable('project_members');
  },
};
