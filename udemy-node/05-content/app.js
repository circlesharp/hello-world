const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views/pug');

app.use(bodyParser.urlencoded());

// Serving files statically
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);

// '/' 是 default
app.use((req, res, next) => {
  res.status(404).sendFile(path.resolve(__dirname, './views/404.html'));
});

app.listen(3000);
