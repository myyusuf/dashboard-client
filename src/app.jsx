var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.jsx');

var App = React.createClass({
  render: function() {
    return <Main/>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.appcontainer'));
