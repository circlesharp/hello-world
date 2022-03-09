const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 解析 body x-www-form-urlencoded
app.use(bodyParser.urlencoded());

app.get('/add-product', (req, res, next) => {
  res.send(`
  <form action="/product" method="POST">
    <label for="name">name</label>
    <input type="text" id="name" name="name" />

    <input type="submit" />
  </form>
  `);
});

app.post('/product', (req, res, next) => {
  res.redirect('/');
});

app.get('/', (req, res, next) => {
  res.send(`<h1>Home</h1>`);
});

app.listen(3000);
