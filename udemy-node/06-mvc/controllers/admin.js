const Product = require('../models/product');

const getEditProductPage = (req, res) => {
  const { productId } = req.params;

  if (productId != null) {
    Product.getProduct(productId, (product) => {
      res.render('admin/edit-product', {
        route: 'admin/edit-product',
        product,
      });
    });
  } else {
    res.render('admin/edit-product', {
      route: 'admin/add-product',
    });
  }
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

const postAddProduct = (req, res) => {
  const body = req?.body ?? {};
  const { name, price, description } = body;
  const product = new Product({ name, price, description });
  product.save((err) => {
    if (!err) {
      res.redirect('/admin/products');
    }
  });
};

const postEditProduct = (req, res) => {
  const product = req?.body ?? {};
  Product.updateProduct(product, (err) => {
    if (err) return;

    res.redirect('/admin/products');
  });
};

module.exports = {
  getEditProductPage,
  getProductsPage,
  postAddProduct,
  postEditProduct,
};
