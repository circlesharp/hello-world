module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('./plugin/track-deps'),
    // require('cssnano'),
  ],
};
