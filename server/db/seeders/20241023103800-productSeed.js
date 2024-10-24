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
          imgURL: 'https://cdn1.ozone.ru/s3/multimedia-f/6418590339.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'фильтр',
          description: 'лучший кофе-фильтр',
          price: 100,
          categoryId: 2,
          stock: 200,
          imgURL: 'https://ya-doma24.ru/uploads/product/662300/662372/Filtr-dlya-kofe-Filtero-4-80_2022-12-18_14-41-29.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'espresso второй',
          description: 'лучший кофе второй',
          price: 150,
          categoryId: 1,
          stock: 100,
          imgURL: 'https://dimishop.ru/upload/iblock/6b8/6b8c191ae989035bf3436a6f1e0ff011.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'кофемашина',
          description: 'лучшая кофемашина',
          price: 100000,
          categoryId: 3,
          stock: 150,
          imgURL: 'https://2cent.ru/storage/photo/resized/xy_1500x1500/g/p8rwglichjlg1i8_1ba0248d.jpg.webp',
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
