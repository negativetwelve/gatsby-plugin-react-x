exports.modifyWebpackConfig = ({config, env}) => {
  config.merge({
    resolve: {
      extensions: ['.dom.js', '.js', '.json'],
    },
  });

  return config;
};
