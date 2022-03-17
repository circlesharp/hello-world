const express = require('express');
const {
  getEditProductPage,
  getProductsPage,
  postAddProduct,
  postEditProduct,
} = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', getEditProductPage);

router.get('/edit-product/:productId', getEditProductPage);

router.get('/products', getProductsPage);

router.post('/add-product', postAddProduct);

router.post('/edit-product', postEditProduct);

module.exports = router;
