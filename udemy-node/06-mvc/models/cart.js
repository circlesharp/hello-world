const db = require('../db/db-file');

class Cart {
  static getCart(cb) {
    db.getCart(cb);
  }

  static addToCart(id, cb) {
    Cart.getCart((cartItems) => {
      const itemIdx = cartItems.findIndex((i) => i.id === Number(id));
      if (itemIdx !== -1) {
        cartItems[itemIdx].qty += 1;
      } else {
        cartItems.push({
          id: Number(id),
          qty: 1,
        });
      }

      db.saveCart(cartItems, cb);
    });
  }
}

module.exports = Cart;
