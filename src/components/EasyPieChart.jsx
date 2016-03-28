var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

module.exports = EasyPieChart = React.createClass({
  statics: {
    greenUpArrow: 0,
    redUpArrow: 1,
    greenDownArrow: 2,
    redDownArrow: 3,
    greenSharp: 0,
    redHaze: 1,
    blueSharp: 2,
    purpleSoft: 3
  },
  getDefaultProps: function() {
    return {
      id: '',
      caption: 'Caption',
      title: 'Title',
      description: 'Description',
      progressInPercentage: 0,
      iconType: 0,
      panelColor: 0
    }
  },
  componentDidMount: function(){
    $('#qmslPanel').find('div').easyPieChart({
        animate: 1000,
        size: 75,
        lineWidth: 3,
        barColor: App.getBrandColor('yellow')
    });
  },
  render: function() {

    return (
      <div id="qmslPanel" className="easy-pie-chart">
        <div className="number qmsl" data-percent="55">
          <span>0</span>%
        </div>
        <a className="title" href="javascript:;">
          QMSL
          <i className="icon-arrow-right"></i>
        </a>
      </div>
    );
  }
});
