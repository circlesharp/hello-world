const path = require('path');
const express = require('express');
const db = require('../db/index');

const router = express.Router();

router.get('/add-product', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  const name = req?.body?.name;
  db.addProduct({ name });
  res.redirect('/');
});

module.exports = router;
