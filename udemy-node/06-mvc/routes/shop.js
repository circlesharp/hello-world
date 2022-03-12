const express = require('express');
const productsController = require('../controllers/products');

// 相当于一个 tiny express-app
const router = express.Router();

router.get('/', productsController.getProductsPage);

module.exports = router;
