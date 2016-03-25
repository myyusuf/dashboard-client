var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.jsx');

var Hello = React.createClass({
  render: function() {
    return <Main />
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.appcontainer'));
