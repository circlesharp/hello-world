const express = require('express');

// 相当于一个 tiny express-app
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h1>Home</h1>`);
});

module.exports = router;
