const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE_PATH = path.resolve(__dirname, './products.json');

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
        JSON.stringify([
          ...products,
          {
            ...newProduct,
            id: Number.parseInt(String(Math.random() * 1000000000000)),
          },
        ]),
        (err) => cb(err)
      );
    });
  }
}

module.exports = new DBMemory();
