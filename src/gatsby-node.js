exports.modifyWebpackConfig = ({config, env}) => {
  config.merge({
    resolve: {
      alias: {
        'react-art': 'empty-module',
      },
      extensions: ['.dom.js', '.js', '.json'],
    },
  });

  return config;
};
