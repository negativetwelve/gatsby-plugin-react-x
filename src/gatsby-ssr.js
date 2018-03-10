// Libraries
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {AppRegistry} from 'react-native-web';

exports.replaceRenderer = ({bodyComponent, replaceBodyHTMLString, setHeadComponents}) => {
  class App extends React.Component {
    render() {
      return bodyComponent;
    }
  }

  AppRegistry.registerComponent('App', () => App)
  const {element, stylesheets} = AppRegistry.getApplication('App');
  const html = ReactDOMServer.renderToString(element);

  // TODO(mark): Switch to getStyleElement when react-primitives updates to
  // 0.5.2 of react-native-web.
  // const styleElement = getStyleElement();

  replaceBodyHTMLString(html);
  setHeadComponents([
    stylesheets,
  ]);
};
