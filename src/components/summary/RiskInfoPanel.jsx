var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var RiskInfoStore = require('../../stores/RiskInfoStore')
var Panel = require('../Panel')

module.exports = React.createClass({
  mixins: [Reflux.listenTo(RiskInfoStore, 'onChange')],
  getInitialState: function() {
    return {
      riskInfo: {
        month: 0,
        year: 0,
        riskCount: 0,
        extremeRiskount: 0
      }
    }
  },
  onChange: function(event, riskInfoData) {
    this.setState({riskInfo: riskInfoData});
  },
  componentWillMount: function() {
    Actions.getRiskInfoData();
  },
  render: function() {

    var _progressInPercentage = 0;
    if (this.state.riskInfo.riskCount > 0) {
      _progressInPercentage = (this.state.riskInfo.extremeRiskCount / this.state.riskInfo.riskCount) * 100;
    }

    var _extremeRiskCountInMillion = parseFloat(this.state.riskInfo.extremeRiskCount) / 1000000;

    var _caption = _extremeRiskCountInMillion.toFixed(2) + ' JUTA';;
    var _title = "Nilali Risiko Ekstrim";
    var _description = "% terhadap total";

    return (
      <Panel
        caption={_caption}
        title={_title}
        description={_description}
        progressInPercentage={_progressInPercentage.toFixed(2)}
        iconType={Panel.redUpArrow}
        panelColor={Panel.purpleSoft}
      />);
  }
});
