const path = require('path');

function getAbsPath(fileName) {
  const pwd = process.cwd();
  return path.resolve(pwd, fileName);
}

module.exports = { getAbsPath };
