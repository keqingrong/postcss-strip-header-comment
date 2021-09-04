/** @type {import('postcss').PluginCreator} */
module.exports = () => {
  return {
    postcssPlugin: 'postcss-strip-header-comment',
    Root(root) {
      const { first } = root;
      if (first && first.type === 'comment' && first.inline !== true) {
        first.remove();
      }
    },
  };
};
module.exports.postcss = true;
