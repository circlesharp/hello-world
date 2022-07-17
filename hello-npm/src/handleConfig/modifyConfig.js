const path = require('path');
const { run: jscodeshift } = require('jscodeshift/src/Runner');

const DEF_TRANS_PATH = path.resolve(__dirname, './transform.js');

const DEF_OPTIONS = {
  dry: true,
  print: true,
};

async function modifyConfig(
  configPath,
  newConfigPath,
  transformPath = DEF_TRANS_PATH,
  options = DEF_OPTIONS
) {
  await jscodeshift(transformPath, [configPath], options);

  return newConfigPath;
}

module.exports = { modifyConfig };
