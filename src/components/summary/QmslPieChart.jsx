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

var _defaultQmsl = {
  month: 0,
  year: 0,
  qmslValue: 0,
  scoreTarget: 0,
  projectCount: 0
};

module.exports = React.createClass({
  mixins: [Reflux.listenTo(SmwgStore, 'onChange')],
  getInitialState: function() {
    return {
      qmsl: _defaultQmsl
    }
  },
  onChange: function(event, result) {

    var _eventType = result.eventType;

    if(_eventType === 'success'){

      var _data = result.data;

      var _qmslData = {
        month: 0,
        year: 0,
        qmslValue: _data.qmsl,
        scoreTarget: _data.scoreTarget.qmsl,
        projectCount: _data.projectCount.qmsl
      }

      this.setState({qmsl: _qmslData});
    }else if(_eventType === 'error'){
      this.setState({qmsl: _defaultQmsl});
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
    var _progressInPercentage = 0;
    if(this.state.qmsl.projectCount != 0){
      _progressInPercentage = (this.state.qmsl.qmslValue / this.state.qmsl.projectCount) * 100;
    }

    return (
      <EasyPieChart
        id={this.props.id}
        title={_title}
        progressInPercentage={Formatter.formatNumber(_progressInPercentage, 0)}
        panelColor={EasyPieChart.yellow}
      />
    );
  }
});
