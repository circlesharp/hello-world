const express = require('express');
const dayjs = require('dayjs');

const app = express();
const port = 3000;

const recordRequestTime = (req, res, next) => {
  const now = dayjs().format('YYYY/MM/DD HH:mm');
  console.log(`请求时间: ${now}`);
  next();
};

const greeting = (req, res, next) => {
  console.log('hello');
  next();
};

app.use(recordRequestTime);

app.use(greeting);

app.get('/user', (req, res) => {
  res.send(`<h1>User</h1>`);
});

app.get('/', (req, res) => {
  res.send(`<h1>Home</h1>`);
});

app.listen(port);
