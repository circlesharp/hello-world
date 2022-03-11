const path = require('path');
const express = require('express');
const db = require('../db/index');

// 相当于一个 tiny express-app
const router = express.Router();

router.get('/', (req, res) => {
  console.log(db.getAllProducts());
  res.sendFile(path.resolve(__dirname, '../views/shop.html'));
});

module.exports = router;
