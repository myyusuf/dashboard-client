var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var NetProfitStore = require('../../stores/NetProfitStore');
var Panel = require('../Panel');

var Formatter = require('../../utils/Formatter');
var Utils = require('../../utils/Utils');

var _defaultNetProfit = {
  month: 0,
  year: 0,
  netProfit: 0,
  prevNetProfit: 0,
  rkap: 0,
  prevRkap: 0
};

module.exports = React.createClass({
  mixins: [Reflux.listenTo(NetProfitStore, 'onChange')],
  getInitialState: function() {
    return {
      netProfit: _defaultNetProfit
    }
  },
  getDefaultProps: function() {
    var _randomId = 'netProfitPanel_' + Utils.generateUUID();
    return {
      id: _randomId,
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

    var _linkUrl = 'viewpdf/netprofit/' + this.state.netProfit.year + '/' + this.state.netProfit.month;

    // var _netProfit = parseFloat(this.state.netProfit.netProfit);
    // var _prevNetProfit = parseFloat(this.state.netProfit.prevNetProfit);
    //
    // var _iconType = {};
    // if(_netProfit > _prevNetProfit){
    //   _iconType = Panel.greenUpArrow;
    // }else if (_netProfit < _prevNetProfit){
    //   _iconType = Panel.redDownArrow;
    // }else{
    //   _iconType = Panel.blueRightArrow;
    // }

    var _prevProgressInPercentage = 0;
    if(this.state.netProfit.prevRkap > 0){
        _prevProgressInPercentage = (this.state.netProfit.prevNetProfit / this.state.netProfit.prevRkap) * 100;
    }

    var _iconType = {};
    if(_progressInPercentage > _prevProgressInPercentage){
      _iconType = Panel.greenUpArrow;
    }else if (_progressInPercentage < _prevProgressInPercentage){
      _iconType = Panel.redDownArrow;
    }else{
      _iconType = Panel.blueRightArrow;
    }

    return (
      <Link to={_linkUrl} className="">
      <Panel
        id={this.props.id}
        caption={_caption}
        title={_title}
        description={_description}
        progressInPercentage={Formatter.formatNumber(_progressInPercentage)}
        iconType={_iconType}
      />
      </Link>
    );
  }
});
