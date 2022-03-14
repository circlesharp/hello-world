const Product = require('../models/product');

const getIndexPage = (req, res) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      products,
      docTitle: 'Shop',
      route: 'index',
    });
  });
};

const getProductsPage = (req, res) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      products,
      docTitle: 'Product List',
      route: 'products',
    });
  });
};

const getCartPage = (req, res) => {
  res.render('shop/cart', {
    docTitle: 'My Cart',
    route: 'cart',
  });
};

const getOrdersPage = (req, res) => {
  res.render('shop/orders', {
    docTitle: 'My Orders',
    route: 'orders',
  });
};

const getCheckoutPage = (req, res) => {
  res.render('shop/checkout', {
    docTitle: 'Checkout',
    route: 'checkout',
  });
};

module.exports = {
  getIndexPage,
  getProductsPage,
  getCartPage,
  getOrdersPage,
  getCheckoutPage,
};
