// Libraries
import path from 'path';

exports.onCreateWebpackConfig = ({actions, getConfig}) => {
  const config = getConfig();

  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-art': path.join(__dirname, 'react-art.js'),
      },
      extensions: ['.dom.js', '.js', '.json'],
      modules: [
        path.resolve(config.context, 'src'),
        'node_modules',
      ],
    }
  });
};

exports.onCreateBabelConfig = ({actions, stage}) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-styled-components',
    stage,
    options: {
      ssr: stage === 'build-html',
    },
  });
};
