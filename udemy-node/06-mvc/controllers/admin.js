const Product = require('../models/product');

const getAddProductPage = (req, res) => {
  res.render('admin/add-product', {
    route: 'admin/add-product',
  });
};

const getProductsPage = (req, res) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      products,
      docTitle: 'Admin Products',
      route: 'admin/products',
    });
  });
};

const postAddProduct = (req, res, next) => {
  const body = req?.body ?? {};
  const { name, price, description } = body;
  const product = new Product({ name, price, description });
  product.save((err) => {
    if (!err) {
      res.redirect('/');
    }
  });
};

module.exports = { getAddProductPage, getProductsPage, postAddProduct };
