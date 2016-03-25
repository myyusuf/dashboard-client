var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

module.exports = Panel = React.createClass({
  statics:{
    greenUpArrow: 0,
    redUpArrow: 1,
    greenDownArrow: 2,
    redDownArrow: 3,
  },
  getDefaultProps: function() {
    return {
      caption: 'Caption',
      title: 'Title',
      description: 'Description',
      progressInPercentage: 0,
      iconType: 0
    }
  },
  render: function() {

    var progressStyle = {
      width: this.props.progressInPercentage + '%'
    };

    var _iconClassName = '';

    if(this.props.iconType === Panel.greenUpArrow){
      _iconClassName = 'fa fa-chevron-circle-up font-green';
    }else if(this.props.iconType === Panel.redUpArrow){
      _iconClassName = 'fa fa-chevron-circle-up font-red';
    }else if(this.props.iconType === Panel.greenDownArrow){
      _iconClassName = 'fa fa-chevron-circle-down font-green';
    }else if(this.props.iconType === Panel.redDownArrow){
      _iconClassName = 'fa fa-chevron-circle-down font-red';
    };

    return (
      <div className="dashboard-stat2 bordered">
        <div className="display">
          <div className="number">
            <h3 className="font-green-sharp">
              <span>
                {this.props.caption}
              </span>

            </h3>
            <small>{this.props.title}</small>
          </div>
          <div className="icon">

            <i className={_iconClassName}></i>
          </div>
        </div>
        <div className="progress-info">
          <div className="progress">
            <span id="profitProgress" style={progressStyle} className="progress-bar progress-bar-success green-sharp">
              <span className="sr-only">% progress</span>
            </span>
          </div>
          <div className="status">
            <div className="status-title">
              {this.props.description}
            </div>
            <div id="profitStatusNumber" className="status-number">
              {this.props.progressInPercentage} %
            </div>
          </div>
        </div>
      </div>
    );
  }
});
