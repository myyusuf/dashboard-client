var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/Main');

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
)
