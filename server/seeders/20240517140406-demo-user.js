'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: '123@example.com',
        password: '1234',
        name: 'Тест Тестович',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'test@example.com',
        password: 'test123',
        name: 'Джуниор Тестович',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
