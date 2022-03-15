const db = require('../db/db-file');

class Product {
  constructor({ name, price, description = '' }) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  save(cb) {
    db.addProduct(this, cb);
  }

  static fetchAll(cb) {
    db.getAllProducts(cb);
  }

  static findOneById(id, cb) {
    db.findProductsById(id, cb);
  }
}

module.exports = Product;
