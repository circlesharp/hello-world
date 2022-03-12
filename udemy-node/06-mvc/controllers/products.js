const db = require('../db/index');

const getProductsPage = (req, res) => {
  const products = db.getAllProducts();
  res.render('shop', {
    products,
    docTitle: 'My Shop',
    route: 'shop',
  });
};

const getAddProductPage = (req, res) => {
  res.render('add-product', {
    route: 'add-product',
  });
};

const postAddProduct = (req, res, next) => {
  const name = req?.body?.name;
  db.addProduct({ name });
  res.redirect('/');
};

module.exports = { getProductsPage, getAddProductPage, postAddProduct };
