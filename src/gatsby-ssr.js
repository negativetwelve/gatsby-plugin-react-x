// Libraries
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {AppRegistry} from 'react-native-web';
import {ServerStyleSheet, StyleSheetManager} from "styled-components"

exports.replaceRenderer = ({bodyComponent, replaceBodyHTMLString, setHeadComponents}) => {
  const sheet = new ServerStyleSheet();

  // NOTE(mark): We must render a stateful component. Stateless components
  // have an issue with rendering toString.
  class App extends React.Component {
    render() {
      return (
        <StyleSheetManager sheet={sheet.instance}>
          {bodyComponent}
        </StyleSheetManager>
      );
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
    sheet.getStyleElement(),
  ]);
};
