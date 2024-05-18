'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'validate@example.com',
        password: '1!Aa',
        name: 'Валидатор Валидатович',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Mr.test@example.com',
        password: 'Hello?123',
        name: 'Мистер Тестик',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
