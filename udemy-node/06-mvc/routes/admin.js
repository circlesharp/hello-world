const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', productsController.getAddProductPage);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;
