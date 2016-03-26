var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var ScoreCardStore = require('../../stores/ScoreCardStore')
var Panel = require('../Panel')

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ScoreCardStore, 'onChange')],
  getInitialState: function() {
    return {
      scoreCard: {
        month: 0,
        year: 0,
        total: 0,
        target: 0
      }
    }
  },
  onChange: function(event, scoreCardData) {
    this.setState({scoreCard: scoreCardData});
  },
  componentWillMount: function() {
    Actions.getScoreCardData();
  },
  render: function() {

    var _progressInPercentage = 0;
    if (this.state.scoreCard.target > 0) {
      _progressInPercentage = (this.state.scoreCard.total / this.state.scoreCard.target) * 100;
    }

    var _caption = this.state.scoreCard.total;
    var _title = 'ScoreCard';
    var _description = '% terhadap target';

    return (
      <Panel
        caption={_caption}
        title={_title}
        description={_description}
        progressInPercentage={_progressInPercentage.toFixed(2)}
        iconType={Panel.greenDownArrow}
        panelColor={Panel.blueSharp}
      />);
  }
});
