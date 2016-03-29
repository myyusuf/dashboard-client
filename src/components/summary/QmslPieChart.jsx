var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var NetProfitStore = require('../../stores/NetProfitStore');
var EasyPieChart = require('../EasyPieChart');

var Formatter = require('../../utils/Formatter');
var Utils = require('../../utils/Utils');

var _defaultNetProfit = {
  month: 0,
  year: 0,
  netProfit: 0,
  rkap: 0
};

module.exports = React.createClass({
  // mixins: [Reflux.listenTo(NetProfitStore, 'onChange')],
  getInitialState: function() {
    return {
      netProfit: _defaultNetProfit
    }
  },
  onChange: function(event, result) {

    var _eventType = result.eventType;

    if(_eventType === 'success'){
      this.setState({netProfit: result.data});
    }else if(_eventType === 'error'){
      this.setState({netProfit: _defaultNetProfit});
    }else if(_eventType === 'startRequest'){
      App.blockUI({
          target: '#' + this.props.id,
          boxed: true
      });
    }

  },
  getDefaultProps: function() {

    var _randomId = 'qmslPieChart_' + Utils.generateUUID();
    return {
      id: _randomId,
    }
  },
  componentDidUpdate: function() {
    App.unblockUI('#' + this.props.id);
  },
  render: function() {

    var _title = "QMSL";
    var _progressInPercentage = 10;

    return (
      <EasyPieChart
        title={_title}
        progressInPercentage={Formatter.formatNumber(_progressInPercentage, 0)}
        panelColor={EasyPieChart.yellow}
      />
    );
  }
});
