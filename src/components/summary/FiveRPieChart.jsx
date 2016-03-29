var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var SmwgStore = require('../../stores/SmwgStore');
var EasyPieChart = require('../EasyPieChart');

var Formatter = require('../../utils/Formatter');
var Utils = require('../../utils/Utils');

var _defaultFiveR = {
  month: 0,
  year: 0,
  fiveRValue: 0,
  scoreTarget: 0,
  projectCount: 0
};

module.exports = React.createClass({
  mixins: [Reflux.listenTo(SmwgStore, 'onChange')],
  getInitialState: function() {
    return {
      fiveR: _defaultFiveR
    }
  },
  onChange: function(event, result) {

    var _eventType = result.eventType;

    if(_eventType === 'success'){

      var _data = result.data;

      var _fiveRData = {
        month: 0,
        year: 0,
        fiveRValue: _data.limaR,
        scoreTarget: _data.scoreTarget.limaR,
        projectCount: _data.projectCount.limaR
      }

      this.setState({fiveR: _fiveRData});
    }else if(_eventType === 'error'){
      this.setState({fiveR: _defaultFiveR});
    }else if(_eventType === 'startRequest'){
      App.blockUI({
          target: '#' + this.props.id,
          boxed: true
      });
    }

  },
  getDefaultProps: function() {

    var _randomId = 'fiveRPieChart_' + Utils.generateUUID();
    return {
      id: _randomId,
    }
  },
  componentDidUpdate: function() {
    App.unblockUI('#' + this.props.id);
  },
  render: function() {

    var _title = "5R";
    var _progressInPercentage = 0;
    if(this.state.fiveR.projectCount != 0){
      _progressInPercentage = (this.state.fiveR.fiveRValue / this.state.fiveR.projectCount) * 100;
    }

    return (
      <EasyPieChart
        id={this.props.id}
        title={_title}
        progressInPercentage={Formatter.formatNumber(_progressInPercentage, 0)}
        panelColor={EasyPieChart.red}
      />
    );
  }
});
