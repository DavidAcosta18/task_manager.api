/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('projects', [
      {
        name: 'Project Alpha',
        description: 'First project description',
        customColor: '#FF5733',
        isActive: true,
        startDate: '2024-01-01',
        endDate: '2024-06-30',
        leaderId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('projects', null);
  },
};
