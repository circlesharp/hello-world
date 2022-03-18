const db = require('./database');

db.execute('SELECT * FROM products').then(([rst]) => {
  console.log(rst);
});
