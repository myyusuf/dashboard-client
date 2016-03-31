var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Main = require('./components/Main');
var WgPdfViewer = require('./components/WgPdfViewer');

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="viewpdf/:viewerType/:year/:month" component={WgPdfViewer}>
      </Route>
      <Route path="viewpdf/:viewerType/:year" component={WgPdfViewer}>
      </Route>
    </Route>
  </Router>
)
