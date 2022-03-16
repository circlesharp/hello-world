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

  static getProduct(id, cb) {
    if (Array.isArray(id)) {
      db.findProductsByIds(id, cb);
    } else {
      db.findProductById(id, cb);
    }
  }
}

module.exports = Product;
