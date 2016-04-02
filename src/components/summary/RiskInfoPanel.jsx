var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var RiskInfoStore = require('../../stores/RiskInfoStore');
var Panel = require('../Panel');

var Formatter = require('../../utils/Formatter');
var Utils = require('../../utils/Utils');

var _defaultRiskInfo = {
  month: 0,
  year: 0,
  riskCount: 0,
  extremeRiskCount: 0,
  prevExtremeRiskCount: 0
}

module.exports = React.createClass({
  mixins: [Reflux.listenTo(RiskInfoStore, 'onChange')],
  getInitialState: function() {
    return {
      riskInfo: _defaultRiskInfo
    }
  },
  getDefaultProps: function() {
    var _randomId = 'riskInfoPanel_' + Utils.generateUUID();
    return {
      id: _randomId,
    }
  },
  onChange: function(event, result) {

    var _eventType = result.eventType;

    if(_eventType === 'success'){
      this.setState({riskInfo: result.data});
    }else if(_eventType === 'error'){
      this.setState({riskInfo: _defaultRiskInfo});
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
    if (this.state.riskInfo.riskCount > 0) {
      _progressInPercentage = (this.state.riskInfo.extremeRiskCount / this.state.riskInfo.riskCount) * 100;
    }

    var _extremeRiskCountInMillion = parseFloat(this.state.riskInfo.extremeRiskCount) / 1000000;

    var _caption = Formatter.formatNumber(_extremeRiskCountInMillion) + ' JUTA';;
    var _title = "Nilai Risiko Ekstrim";
    var _description = "% terhadap total";

    var _extremeRiskCount = parseFloat(this.state.riskInfo.extremeRiskCount);
    var _prevExtremeRiskCount = parseFloat(this.state.riskInfo.prevExtremeRiskCount);

    var _iconType = {};
    if(_extremeRiskCount > _prevExtremeRiskCount){
      _iconType = Panel.redUpArrow;
    }else if(_extremeRiskCount < _prevExtremeRiskCount){
      _iconType = Panel.greenDownArrow;
    }else{
      _iconType = Panel.blueRightArrow;
    }

    return (
      <Panel
        id={this.props.id}
        caption={_caption}
        title={_title}
        description={_description}
        progressInPercentage={Formatter.formatNumber(_progressInPercentage)}
        iconType={_iconType}
        panelColor={Panel.purpleSoft}
      />);
  }
});
