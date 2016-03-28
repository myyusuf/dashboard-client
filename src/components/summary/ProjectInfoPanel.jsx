var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var ProjectInfoStore = require('../../stores/ProjectInfoStore')
var Panel = require('../Panel')

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ProjectInfoStore, 'onChange')],
  getInitialState: function() {
    return {
      projectInfo: {
        month: 0,
        year: 0,
        projectCount: 0,
        lateProjectCount: 0
      }
    }
  },
  onChange: function(event, projectInfoData) {
    this.setState({projectInfo: projectInfoData});
  },
  componentWillMount: function() {
    Actions.getProjectInfoData({});
  },
  render: function() {

    var _progressInPercentage = 0;
    if (this.state.projectInfo.projectCount > 0) {
      _progressInPercentage = (this.state.projectInfo.lateProjectCount / this.state.projectInfo.projectCount) * 100;
    }

    var _caption = this.state.projectInfo.lateProjectCount;
    var _title = "Proyek Terlambat";
    var _description = "% terhadap total proyek";

    return (
      <Panel
        caption={_caption}
        title={_title}
        description={_description}
        progressInPercentage={_progressInPercentage.toFixed(2)}
        iconType={Panel.redDownArrow}
        panelColor={Panel.redHaze}
      />);
  }
});
