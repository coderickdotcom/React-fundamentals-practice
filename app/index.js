var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// f(d) = V, a function that takes data and gives back a view
/*
react components should be FIRST
Focused
Independent
Reusable
Small
Testable
*/

ReactDOM.render(
  routes,
  document.getElementById('app')
);
