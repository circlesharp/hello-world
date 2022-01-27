const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const devConfig = {
  mode: 'development',
  output: {
    publicPath:'/dist',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './',
    port: 8080,
  },
};

module.exports = merge(baseConfig, devConfig);
