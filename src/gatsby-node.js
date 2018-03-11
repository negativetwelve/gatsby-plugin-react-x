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

exports.modifyBabelrc = ({babelrc}) => ({
  ...babelrc,
  plugins: [
    ...babelrc.plugins,
    ['babel-plugin-styled-components', {
      displayName: true,
      ssr: true,
    }],
  ],
});
