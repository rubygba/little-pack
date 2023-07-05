import React from './test/myReact.js'

export default (function () {
  var x = 'hello world';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "jsx title"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, x)));
});
