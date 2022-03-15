const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE_PATH = path.resolve(__dirname, './products.json');

class DBFile {
  getAllProducts(cb) {
    fs.readFile(PRODUCTS_FILE_PATH, (err, fileContent) => {
      cb(err ? [] : JSON.parse(fileContent));
    });
  }

  findProductsById(id, cb) {
    fs.readFile(PRODUCTS_FILE_PATH, (err, fileContent) => {
      const product = err
        ? undefined
        : JSON.parse(fileContent).find((p) => p.id === Number(id));
      cb(product);
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

module.exports = new DBFile();
