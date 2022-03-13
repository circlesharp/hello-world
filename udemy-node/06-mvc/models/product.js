const db = require('../db/db-file');

class Product {
  constructor({ name }) {
    this.name = name;
  }

  save(cb) {
    db.addProduct(this, cb);
  }

  static fetchAll(cb) {
    return db.getAllProducts(cb);
  }
}

module.exports = Product;
