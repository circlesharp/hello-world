const express = require('express');

// 相当于一个 tiny express-app
const router = express.Router();

router.get('/add-product', (req, res) => {
  res.send(`
  <form action="/admin/product" method="POST">
    <label for="name">name</label>
    <input type="text" id="name" name="name" />

    <input type="submit" />
  </form>
  `);
});

router.post('/product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
