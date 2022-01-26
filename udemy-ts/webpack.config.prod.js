const CleanPlugin = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const prodConfig = {
  mode: 'production',
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
  ],
};

module.exports = merge(baseConfig, prodConfig);
