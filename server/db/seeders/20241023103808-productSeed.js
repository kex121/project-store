'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Футболка Balmain',
          description: 'Футболку с брендированным принтом Kiss сшили из органического хлопкового джерси. Наши стилисты предлагают сделать модель главной деталью повседневного образа с джинсами, рубашкой и кедами.',
          price: 62250,
          size: 'S',
          color: 'черный',
          stock: 30,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Футболка Balmain',
          description: 'Футболку с брендированным принтом Kiss сшили из органического хлопкового джерси. Наши стилисты предлагают сделать модель главной деталью повседневного образа с джинсами, рубашкой и кедами.',
          price: 62250,
          size: 'M',
          color: 'черный',
          stock: 23,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Футболка Balmain',
          description: 'Футболку с брендированным принтом Kiss сшили из органического хлопкового джерси. Наши стилисты предлагают сделать модель главной деталью повседневного образа с джинсами, рубашкой и кедами.',
          price: 62250,
          size: 'L',
          color: 'черный',
          stock: 47,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Футболка Zilli',
          description: 'Футболку из хлопкового джерси украсили логотипом и графичным принтом Mountains. Наши стилисты предлагают носить прямую модель с однотонными брюками и челси.',
          price: 131000,
          size: 'M',
          color: 'черно-белый',
          stock: 14,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Брюки Diesel',
          price: 24450,
          size: 'S',
          color: 'черный',
          stock: 70,
          categoryId: 3,
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
