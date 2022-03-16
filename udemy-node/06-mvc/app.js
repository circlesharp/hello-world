const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views/pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serving files statically
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// '/' 是 default
app.use(errorController.get404Page);

app.listen(3000);
