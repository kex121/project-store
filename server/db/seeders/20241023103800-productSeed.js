'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'espresso',
          description: 'лучший кофе',
          price: 100,
          categoryId: 1,
          stock: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'фильтр',
          description: 'лучший кофе-фильтр',
          price: 100,
          categoryId: 2,
          stock: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'espresso второй',
          description: 'лучший кофе второй',
          price: 150,
          categoryId: 1,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'кофемашина',
          description: 'лучшая кофемашина',
          price: 100000,
          categoryId: 3,
          stock: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
