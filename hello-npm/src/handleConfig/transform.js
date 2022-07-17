module.exports.parser = 'json';

module.exports.default = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  return root.toSource();
};
