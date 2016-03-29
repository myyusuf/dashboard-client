var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Utils = require('../utils/Utils');

module.exports = EasyPieChart = React.createClass({
  statics: {
    greenUpArrow: 0,
    redUpArrow: 1,
    greenDownArrow: 2,
    redDownArrow: 3,
    blue: '#89C4F4',
    red: '#F3565D',
    green: '#1bbc9b',
    purple: '#9b59b6',
    grey: '#95a5a6',
    yellow: '#F8CB00'
  },
  getDefaultProps: function() {
    var _randomId = 'qmslPieChart_' + Utils.generateUUID();
    return {
      id: _randomId,
      title: 'Title',
      progressInPercentage: 0,
      iconType: 0,
      panelColor: '#89C4F4'
    }
  },
  componentDidMount: function(){
    $('#' + this.props.id).find('div').easyPieChart({
        animate: 1000,
        size: 75,
        lineWidth: 3,
        barColor: this.props.panelColor
    });
  },
  componentDidUpdate: function() {
    $('#' + this.props.id).find('div').data('easyPieChart').update(this.props.progressInPercentage);
  },
  render: function() {
    var _iconStyle = {
      marginLeft: '5px'
    }
    return (
      <div id={this.props.id} className="easy-pie-chart">
        <div className="number" data-percent={this.props.progressInPercentage}>
          <span>{this.props.progressInPercentage}</span>%
        </div>
        <a className="title" href="javascript:;">
          {this.props.title}
          <i className="icon-arrow-right" style={_iconStyle}></i>
        </a>
      </div>
    );
  }
});
