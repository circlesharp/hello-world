const PRODUCTS = 'products';

class DB {
  dataBase = new Map();

  constructor() {
    this.dataBase.set(PRODUCTS, []);
  }

  getAllProducts() {
    return this.dataBase.get(PRODUCTS);
  }

  addProduct(newProduct) {
    const products = this.getAllProducts();
    this.dataBase.set(PRODUCTS, [...products, newProduct]);
  }
}

module.exports = new DB();
