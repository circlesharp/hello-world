const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE_PATH = path.resolve(__dirname, './db_file/products.json');

class DBMemory {
  getAllProducts(cb) {
    fs.readFile(PRODUCTS_FILE_PATH, (err, fileContent) => {
      cb(err ? [] : JSON.parse(fileContent));
    });
  }

  addProduct(newProduct, cb = (i) => i) {
    this.getAllProducts((products) => {
      fs.writeFile(
        PRODUCTS_FILE_PATH,
        JSON.stringify([...products, newProduct]),
        (err) => cb(err)
      );
    });
  }
}

module.exports = new DBMemory();
