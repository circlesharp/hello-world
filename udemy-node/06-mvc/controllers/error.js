const path = require('path');

const get404Page = (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '../views/404.html'));
};

module.exports = { get404Page };
