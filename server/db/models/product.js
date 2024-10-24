'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ User, User_Product }) {
      this.belongsToMany(User, {
        through: User_Product,
        foreignKey: 'productId',
        otherKey: 'userId', 
        as: 'products',
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    categoryId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    imgURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};