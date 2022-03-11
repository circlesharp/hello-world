const path = require('path');
const express = require('express');

// 相当于一个 tiny express-app
const router = express.Router();

router.get('/add-product', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
