module.exports = {
  up(queryInterface, sequelize) {
    const tableFields = {
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
      createdAt: {
        type: sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: sequelize.DATE,
        allowNull: false,
      },
    };

    return queryInterface.createTable('users', tableFields);
  },

  down(queryInterface) {
    return queryInterface.dropTable('users');
  },
};
