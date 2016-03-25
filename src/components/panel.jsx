var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

module.exports = React.createClass({
  render: function() {
    return <div className="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 ">
              <h4 className="widget-thumb-heading">Current Balance</h4>
              <div className="widget-thumb-wrap">
                  <i className="widget-thumb-icon bg-green icon-bulb"></i>
                  <div className="widget-thumb-body">
                      <span className="widget-thumb-subtitle">USD</span>
                      <span className="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">7,644</span>
                  </div>
              </div>
          </div>
  }
});
