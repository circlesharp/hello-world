const express = require('express');
const {
  getAddProductPage,
  getProductsPage,
  postAddProduct,
} = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', getAddProductPage);

router.get('/products', getProductsPage);

router.post('/add-product', postAddProduct);

module.exports = router;
