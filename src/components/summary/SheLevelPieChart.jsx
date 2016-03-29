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

var _defaultSheLevel = {
  month: 0,
  year: 0,
  sheLevelValue: 0,
  scoreTarget: 0,
  projectCount: 0
};

module.exports = React.createClass({
  mixins: [Reflux.listenTo(SmwgStore, 'onChange')],
  getInitialState: function() {
    return {
      sheLevel: _defaultSheLevel
    }
  },
  onChange: function(event, result) {

    var _eventType = result.eventType;

    if(_eventType === 'success'){

      var _data = result.data;

      var _sheLevelData = {
        month: 0,
        year: 0,
        sheLevelValue: _data.sheLevel,
        scoreTarget: _data.scoreTarget.sheLevel,
        projectCount: _data.projectCount.sheLevel
      }

      this.setState({sheLevel: _sheLevelData});
    }else if(_eventType === 'error'){
      this.setState({sheLevel: _defaultSheLevel});
    }else if(_eventType === 'startRequest'){
      App.blockUI({
          target: '#' + this.props.id,
          boxed: true
      });
    }

  },
  getDefaultProps: function() {

    var _randomId = 'sheLevelPieChart_' + Utils.generateUUID();
    return {
      id: _randomId,
    }
  },
  componentDidUpdate: function() {
    App.unblockUI('#' + this.props.id);
  },
  render: function() {

    var _title = "SHE LEVEL";
    var _progressInPercentage = 0;
    if(this.state.sheLevel.projectCount != 0){
      _progressInPercentage = (this.state.sheLevel.sheLevelValue / this.state.sheLevel.projectCount) * 100;
    }

    return (
      <EasyPieChart
        id={this.props.id}
        title={_title}
        progressInPercentage={Formatter.formatNumber(_progressInPercentage, 0)}
        panelColor={EasyPieChart.green}
      />
    );
  }
});
