// Libraries
import React from 'react';
import {AppRegistry} from 'react-native-web';

exports.wrapRootComponent = ({Root}) => {
  AppRegistry.registerComponent('Root', () => Root);

  class WrappedRootComponent extends React.PureComponent {
    render() {
      return AppRegistry.getApplication('Root', {initialProps: this.props}).element;
    }
  }

  return WrappedRootComponent;
};
