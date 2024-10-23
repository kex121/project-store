'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Футболки',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Поло',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Брюки',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
