const Product = require('../models/product');

const getProductsPage = (req, res) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      products,
      docTitle: 'My Shop',
      route: 'shop',
    });
  });
};

const getAddProductPage = (req, res) => {
  res.render('add-product', {
    route: 'add-product',
  });
};

const postAddProduct = (req, res, next) => {
  const name = req?.body?.name;
  const product = new Product({ name });
  product.save((err) => {
    if (!err) {
      res.redirect('/');
    }
  });
};

module.exports = { getProductsPage, getAddProductPage, postAddProduct };
