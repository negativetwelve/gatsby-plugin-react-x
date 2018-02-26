exports.modifyWebpackConfig = ({config, env}) => {
  config.merge({
    resolve: {
      alias: {
        'react-art': './react-art.js',
      },
      extensions: ['.dom.js', '.js', '.json'],
    },
  });

  return config;
};
