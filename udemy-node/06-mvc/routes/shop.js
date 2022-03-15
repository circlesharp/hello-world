const express = require('express');
const {
  getIndexPage,
  getProductsPage,
  getProductDetailPage,
  getCartPage,
  getOrdersPage,
  getCheckoutPage,
} = require('../controllers/shop');

// 相当于一个 tiny express-app
const router = express.Router();

router.get('/', getIndexPage);

router.get('/products', getProductsPage);

router.get('/product/:productId', getProductDetailPage);

router.get('/cart', getCartPage);

router.get('/orders', getOrdersPage);

router.get('/checkout', getCheckoutPage);

module.exports = router;
