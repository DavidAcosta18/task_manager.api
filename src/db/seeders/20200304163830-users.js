const { default: UserRoles } = require('../../common/constants/userRole');
const { securityService } = require('../../services');

module.exports = {
  /**
   * Seed `users` table.
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async up(queryInterface) {
    const password = await securityService.encrypt('admin');

    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@admin.com',
        password,
        role: UserRoles.ADMIN,
        isEnabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  /**
   * Revert table seeding.
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  down(queryInterface) {
    return queryInterface.bulkDelete('users', null);
  },
};
