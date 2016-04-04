var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../../stores/Actions');
var ScoreCardStore = require('../../stores/ScoreCardStore');
var Panel = require('../Panel');

var Formatter = require('../../utils/Formatter');
var Utils = require('../../utils/Utils');

var _deaultScoreCard = {
  month: 0,
  year: 0,
  total: 0,
  prevTotal: 0,
  target: 0
}

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ScoreCardStore, 'onChange')],
  getInitialState: function() {
    return {
      scoreCard: _deaultScoreCard
    }
  },
  getDefaultProps: function() {
    var _randomId = 'scoreCardPanel_' + Utils.generateUUID();
    return {
      id: _randomId,
    }
  },
  onChange: function(event, result) {

    var _eventType = result.eventType;

    if(_eventType === 'success'){
      this.setState({scoreCard: result.data});
    }else if(_eventType === 'error'){
      this.setState({scoreCard: _deaultScoreCard});
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
    if (this.state.scoreCard.target > 0) {
      _progressInPercentage = (this.state.scoreCard.total / this.state.scoreCard.target) * 100;
    }

    var _caption = this.state.scoreCard.total;
    var _title = 'ScoreCard';
    var _description = '% terhadap target';

    var _total = parseFloat(this.state.scoreCard.total);
    var _prevTotal = parseFloat(this.state.scoreCard.prevTotal);

    var _iconType = {};
    if(_total > _prevTotal){
      _iconType = Panel.greenUpArrow;
    }else if(_total < _prevTotal){
      _iconType = Panel.redDownArrow;
    }else{
      _iconType = Panel.blueRightArrow;
    }

    var _linkUrl = 'viewpdf/scorecard/' + this.state.scoreCard.year + '/' + this.state.scoreCard.month;

    return (
      <Link to={_linkUrl} className="">
      <Panel
        id={this.props.id}
        caption={_caption}
        title={_title}
        description={_description}
        progressInPercentage={Formatter.formatNumber(_progressInPercentage)}
        iconType={_iconType}
        panelColor={Panel.blueSharp}
      />
      </Link>
    );
  }
});
