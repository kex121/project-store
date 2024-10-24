const productsRouter = require('express').Router();
const { Product } = require('../../db/models');

productsRouter.get('/catalog', async (req, res) => {
  try {
    const products = Product.findAll({ order: [['id', 'DESC']] });
    res.send(products);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = productsRouter;
