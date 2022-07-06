module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-trackdeps',
    Once(root, { result }) {
      const { messages } = result;
      const parentPath = result.opts.from;
      console.log(`\n\nroot: ${parentPath}\n`);

      for (const msg of messages) {
        const childPath = msg.file;
        console.log(`      ${childPath}`);
      }

      debugger;
    },
  };
};
module.exports.postcss = true;
