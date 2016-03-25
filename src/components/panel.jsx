var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Reflux = require('reflux');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Actions = require('../stores/actions');
var FinancialStore = require('../stores/financial-store')

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(FinancialStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      progressPercentage: '10'
    }
  },
  onChange: function(event, netProfitData) {
    // this.setState({topics: topics});
    console.log('netProfitData : ' + netProfitData);
  },
  componentWillMount: function() {
    Actions.getNetProfitData();
  },
  render: function() {

    var progressStyle = {
      width: this.state.progressPercentage + '%'
    };

    return <div id="profitPanel" className="dashboard-stat2 bordered">
        <div className="display">
            <div className="number">
                <h3 className="font-green-sharp">
                    <span id="profitCaption" >0</span>

                    <small className="font-green-sharp">Juta</small>
                </h3>
                <small>LABA BERSIH</small>
            </div>
            <div className="icon">

                <i className="icon-like"></i>
            </div>
        </div>
        <div className="progress-info">
            <div className="progress">
                <span id="profitProgress" style={progressStyle} className="progress-bar progress-bar-success green-sharp">
                    <span className="sr-only">% progress</span>
                </span>
            </div>
            <div className="status">
                <div className="status-title">% terhadap RKAP </div>
                <div id="profitStatusNumber" className="status-number">{this.state.progressPercentage} % </div>
            </div>
        </div>
    </div>
  }
});
