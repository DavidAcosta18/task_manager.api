/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('tasks', [
      {
        title: 'Initial Task',
        description: 'This is the first task description',
        status: 'TODO',
        priority: 'HIGH',
        dueDate: '2024-05-15',
        projectId: 1,
        assigneeId: 2,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('tasks', null);
  },
};
