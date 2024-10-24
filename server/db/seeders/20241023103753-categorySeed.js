'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Кофе для эспрессо',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Кофе для фильтра',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аксессуары',
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
