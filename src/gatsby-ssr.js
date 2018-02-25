// HACK(mark): This is a hack for react-art which is included in react-x.
global.document = {
  createElement: () => null,
};
