var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      progressPercentage: '10'
    }
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
