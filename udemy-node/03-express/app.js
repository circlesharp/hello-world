const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('middleware 1 start');
  next();
  console.log('middleware 1 end');
});

app.use((req, res, next) => {
  res.send(`<h1>Hello World</h1>`);
});

// 等价于: const server = http.createServer(app); server.listen(3000);
app.listen(3000);
