const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// '/' 是 default
app.use((req, res, next) => {
  res.status(404).send(`<h1>Oops!</h1><h2>Page Not Fount</h2>`);
});

app.listen(3000);
