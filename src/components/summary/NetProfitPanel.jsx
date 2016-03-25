var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/actions');
var FinancialStore = require('../../stores/financial-store')
var Panel = require('../panel')

module.exports = React.createClass({
  mixins: [Reflux.listenTo(FinancialStore, 'onChange')],
  getInitialState: function() {
    return {
      netProfit: {
        month: 0,
        year: 0,
        netProfit: 0,
        rkap: 0
      }
    }
  },
  onChange: function(event, netProfitData) {
    this.setState({netProfit: netProfitData});
  },
  componentWillMount: function() {
    Actions.getNetProfitData();
  },
  render: function() {

    var _progressInPercentage = 0;
    if(this.state.netProfit.rkap > 0){
        _progressInPercentage = (this.state.netProfit.netProfit / this.state.netProfit.rkap) * 100;
    }

    var _netProfitInMillion = parseFloat(this.state.netProfit.netProfit) / 1000000;

    var _caption = _netProfitInMillion.toFixed(2) + ' JUTA';
    var _title = "Laba Bersih";
    var _description = "% Persen terhadap RKAP";

    return (
      <Panel
        caption={_caption}
        title={_title}
        description={_description}
        progressInPercentage={_progressInPercentage.toFixed(2)}
      />
    );
  }
});
