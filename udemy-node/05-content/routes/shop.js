const path = require('path');
const express = require('express');
const db = require('../db/index');

// 相当于一个 tiny express-app
const router = express.Router();

router.get('/', (req, res) => {
  const products = db.getAllProducts();
  res.render('shop', {
    products,
    docTitle: 'My Shop',
    route: 'shop',
  });
});

module.exports = router;
