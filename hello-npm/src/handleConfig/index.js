const { getAbsPath } = require('../utils/getAbsPath');
const { modifyConfig } = require('./modifyConfig');

function handleConfig(configPath, newConfigPath) {
  return modifyConfig(getAbsPath(configPath), newConfigPath);
}

module.exports = { handleConfig };
