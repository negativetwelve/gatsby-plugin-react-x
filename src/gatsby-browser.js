// Libraries
import './browser-polyfills';
import React from 'react';
import {AppRegistry} from 'react-native-web';

exports.wrapRootElement = ({element}) => {
  const Root = () => element;

  AppRegistry.registerComponent('Root', () => Root);
  const application = AppRegistry.getApplication('Root', {initialProps: {}});

  // Returns the wrapped element for the entire application.
  return application.element;
};
