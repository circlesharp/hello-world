const Product = require('../models/product');
const Cart = require('../models/cart');

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

const getProductDetailPage = (req, res) => {
  const productId = req.params.productId;
  Product.getProduct(productId, (product) => {
    res.render('shop/product-detail', {
      product,
      route: 'products',
    });
  });
};

const getCartPage = (req, res) => {
  Cart.getCart((cartItems) => {
    ids = cartItems.map((prod) => prod.id);
    Product.getProduct(ids, (products) => {
      for (product of products) {
        const qty = cartItems.find((item) => item.id === product.id).qty;
        product.qty = qty;
      }
      res.render('shop/cart', {
        docTitle: 'My Cart',
        route: 'cart',
        products,
      });
    });
  });
};

const postCart = (req, res) => {
  const { productId } = req.body;
  const isRedirectNeed = req.headers['content-type'] !== 'application/json';
  Cart.addToCart(productId, (err, products) => {
    if (err) return;
    if (isRedirectNeed) {
      res.redirect('/cart');
    } else {
      res.send(products);
    }
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
  getProductDetailPage,
  getCartPage,
  postCart,
  getOrdersPage,
  getCheckoutPage,
};
