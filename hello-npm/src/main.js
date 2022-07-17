const { handleConfig } = require('./handleConfig');
const { handleProducts } = require('./handleProducts');
const { runBuild } = require('./runBuild');
const { getAbsPath } = require('./utils/getAbsPath');

const NEW_CONFIG_PATH = getAbsPath('./trackDeps.config');

async function trackDeps({ configPath, buildScriptName }) {
  // step 1: 拷贝并修改配置文件副本, 插入插件
  const newConfigPath = await handleConfig(configPath, NEW_CONFIG_PATH);

  // step 2: 执行构建命令
  runBuild(buildScriptName, newConfigPath);

  // step 3: 处理产物
  handleProducts({
    deletePaths: [NEW_CONFIG_PATH],
  });
}

module.exports = trackDeps;
