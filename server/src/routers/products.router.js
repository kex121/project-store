const productsRouter = require('express').Router();
const { Product, Category } = require('../../db/models');

productsRouter.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({ 
      include: [{
        model: Category,
        attributes: ['name'],
      }],
      order: [['id', 'ASC']] });
    res.send(products);
  } catch (error) {
    res.sendStatus(400);
  }
});

productsRouter
  .route('/:productId')
  .patch(/*verifyAccessToken, checkMessageOwner,*/ async (req, res) => {
    try {
      const { name, description, price, categoryId, stock } = req.body;
      const product = await Product.findByPk(req.params.productId);
      await product.update({ name, description, price, categoryId, stock });
      res.json(product);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ text: 'Ошибка обновления товара:', product: error.message });
    }
  })
  .delete(/*verifyAccessToken, checkMessageOwner,*/ async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      //   await removeImage(message.img); // Раскомментируй, чтобы картинки не засоряли память
      await product.destroy();
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json({ text: 'Ошибка удаления товара:', product: error.message });
    }
  })
  .get(async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      res.json(product);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ text: 'Ошибка получения товара:', product: error.message });
    }
  });

module.exports = productsRouter;
