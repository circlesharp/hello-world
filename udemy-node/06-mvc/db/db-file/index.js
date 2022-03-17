const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE_PATH = path.resolve(__dirname, './products.json');
const CART_FILE_PATH = path.resolve(__dirname, './cart.json');

class DBFile {
  getAllProducts(cb) {
    fs.readFile(PRODUCTS_FILE_PATH, (err, fileContent) => {
      cb(err ? [] : JSON.parse(fileContent));
    });
  }

  findProductById(id, cb) {
    this.getAllProducts((products) => {
      const product = products.find((p) => p.id === Number(id));
      cb(product);
    });
  }

  findProductsByIds(ids, cb) {
    this.getAllProducts((products) => {
      const matchedProducts = products.filter((product) =>
        ids.map((id) => Number(id)).includes(product.id)
      );
      cb(matchedProducts);
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

  updateProduct(product, cb = (i) => i) {
    this.getAllProducts((products) => {
      const idx = products.findIndex((p) => p.id === Number(product.id));
      products[idx] = {
        ...products[idx],
        ...product,
        id: products[idx].id,
      };
      fs.writeFile(PRODUCTS_FILE_PATH, JSON.stringify(products), cb);
    });
  }

  getCart(cb) {
    fs.readFile(CART_FILE_PATH, (err, fileContent) => {
      cb(err ? [] : JSON.parse(fileContent));
    });
  }

  saveCart(cartItems, cb) {
    fs.writeFile(CART_FILE_PATH, JSON.stringify(cartItems), (err) => {
      cb(err, cartItems);
    });
  }
}

module.exports = new DBFile();
