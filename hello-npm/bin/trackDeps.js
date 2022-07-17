#!/usr/bin/env node

const trackDeps = require('../src/main');

// ================================
// 读取命令行配置
// ================================
const configPath = 'demo.config.js';
const buildScriptName = 'build';

// ================================
// 执行主逻辑
// ================================
trackDeps({
  configPath,
  buildScriptName,
});
