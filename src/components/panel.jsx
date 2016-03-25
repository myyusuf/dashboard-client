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
    greenSharp: 0,
    redHaze: 1,
    blueSharp: 2,
    purpleSoft: 3,

  },
  getDefaultProps: function() {
    return {
      caption: 'Caption',
      title: 'Title',
      description: 'Description',
      progressInPercentage: 0,
      iconType: 0,
      panelColor: 0
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

    var _captionClassName = '';
    var _progressBarClassName = '';
    if(this.props.panelColor === Panel.greenSharp){
      _captionClassName = 'font-green-sharp';
      _progressBarClassName = 'progress-bar progress-bar-success green-sharp';
    }else if(this.props.panelColor === Panel.redHaze){
      _captionClassName = 'font-red-haze';
      _progressBarClassName = 'progress-bar progress-bar-success red-haze';
    }else if(this.props.panelColor === Panel.blueSharp){
      _captionClassName = 'font-blue-sharp';
      _progressBarClassName = 'progress-bar progress-bar-success blue-sharp';
    }else if(this.props.panelColor === Panel.purpleSoft){
      _captionClassName = 'font-purple-soft';
      _progressBarClassName = 'progress-bar progress-bar-success purple-soft';
    }

    return (
      <div className="dashboard-stat2 bordered">
        <div className="display">
          <div className="number">
            <h3 className={_captionClassName}>
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
            <span id="profitProgress" style={progressStyle} className={_progressBarClassName}>
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
