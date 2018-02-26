// Libraries
import path from 'path';

exports.modifyWebpackConfig = ({config, env}) => {
  config.merge({
    resolve: {
      alias: {
        'react-art': path.join(__dirname, 'react-art.js'),
      },
      extensions: ['.dom.js', '.js', '.json'],
    },
  });

  return config;
};
