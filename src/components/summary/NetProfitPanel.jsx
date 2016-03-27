var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var NetProfitStore = require('../../stores/NetProfitStore');
var Panel = require('../Panel');

var Formatter = require('../../utils/Formatter');

var _defaultNetProfit = {
  month: 0,
  year: 0,
  netProfit: 0,
  rkap: 0
};

module.exports = React.createClass({
  mixins: [Reflux.listenTo(NetProfitStore, 'onChange')],
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
  // componentWillMount: function() {
  //   Actions.getNetProfitData();
  // },
  getDefaultProps: function() {
    return {
      id: 'netProfitPanel',
    }
  },
  componentDidUpdate: function() {
    App.unblockUI('#' + this.props.id);
  },
  render: function() {

    var _progressInPercentage = 0;
    if(this.state.netProfit.rkap > 0){
        _progressInPercentage = (this.state.netProfit.netProfit / this.state.netProfit.rkap) * 100;
    }

    var _netProfitInMillion = parseFloat(this.state.netProfit.netProfit) / 1000000;

    var _caption = Formatter.formatNumber(_netProfitInMillion) + ' JUTA';
    var _title = "Laba Bersih";
    var _description = "% Persen terhadap RKAP";

    return (
      <Panel
        id={this.props.id}
        caption={_caption}
        title={_title}
        description={_description}
        progressInPercentage={_progressInPercentage.toFixed(2)}
      />
    );
  }
});
