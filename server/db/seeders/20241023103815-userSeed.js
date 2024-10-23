'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: '123@123',
          pass: '123',
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Timur Sobolev',
          email: 'timur@sobolev',
          pass: '123',
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vasya Pupkin',
          email: 'vasya@mail.ru',
          pass: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Aboba',
          email: 'aboba@mail',
          pass: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
