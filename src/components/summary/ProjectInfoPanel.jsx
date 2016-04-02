var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var ProjectInfoStore = require('../../stores/ProjectInfoStore');
var Panel = require('../Panel');

var Formatter = require('../../utils/Formatter');
var Utils = require('../../utils/Utils');

var _defaultProjectInfo = {
  month: 0,
  year: 0,
  projectCount: 0,
  lateProjectCount: 0,
  prevLateProjectCount: 0
}

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ProjectInfoStore, 'onChange')],
  getInitialState: function() {
    return {
      projectInfo: _defaultProjectInfo
    }
  },
  getDefaultProps: function() {
    var _randomId = 'projectInfoPanel_' + Utils.generateUUID();
    return {
      id: _randomId,
    }
  },
  onChange: function(event, result) {

    var _eventType = result.eventType;

    if(_eventType === 'success'){
      this.setState({projectInfo: result.data});
    }else if(_eventType === 'error'){
      this.setState({projectInfo: _defaultProjectInfo});
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
    if (this.state.projectInfo.projectCount > 0) {
      _progressInPercentage = (this.state.projectInfo.lateProjectCount / this.state.projectInfo.projectCount) * 100;
    }

    var _caption = this.state.projectInfo.lateProjectCount;
    var _title = "Proyek Terlambat";
    var _description = "% terhadap total proyek";

    var _lateProjectCount = this.state.projectInfo.lateProjectCount;
    var _prevLateProjectCount = this.state.projectInfo.prevLateProjectCount;

    var _iconType = {};
    if(_lateProjectCount < _prevLateProjectCount){
      _iconType = Panel.greenDownArrow;
    }else{
      _iconType = Panel.redUpArrow;
    }

    return (
      <Panel
        id={this.props.id}
        caption={_caption}
        title={_title}
        description={_description}
        progressInPercentage={Formatter.formatNumber(_progressInPercentage)}
        iconType={_iconType}
        panelColor={Panel.redHaze}
      />);
  }
});
