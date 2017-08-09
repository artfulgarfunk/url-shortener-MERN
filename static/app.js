'use strict';

var contentNode = document.getElementById('contents');
var component = React.createElement(
  'h1',
  null,
  ' Hello Compile Whirled webby! '
);
ReactDOM.render(component, contentNode);