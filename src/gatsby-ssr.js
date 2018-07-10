// Libraries
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {AppRegistry} from 'react-native-web';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';

exports.replaceRenderer = ({bodyComponent, replaceBodyHTMLString, setHeadComponents}) => {
  const sheet = new ServerStyleSheet();
  const App = () => (
    <StyleSheetManager sheet={sheet.instance}>
      {bodyComponent}
    </StyleSheetManager>
  );

  AppRegistry.registerComponent('App', () => App)
  const {element, getStyleElement} = AppRegistry.getApplication('App');
  const html = ReactDOMServer.renderToString(element);
  const styleElement = getStyleElement();

  replaceBodyHTMLString(html);
  setHeadComponents([
    styleElement,
    sheet.getStyleElement(),
  ]);
};
