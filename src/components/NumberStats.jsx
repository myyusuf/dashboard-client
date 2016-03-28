var React = require('react');

module.exports = NumberStats = React.createClass({
  statics:{
    positionLeft: 0,
    positionRight: 1,
  },
  getDefaultProps: function() {
    return {
      id: '',
      title: 'Title',
      caption: 'Caption',
      position: 0
    }
  },
  render: function() {

    var _position = this.props.position;
    var _positionClassName = '';

    if(_position === NumberStats.positionLeft){
      _positionClassName = 'stat-left';
    }else{
      _positionClassName = 'stat-right'
    }

    return (
      <div className={_positionClassName}>
        <div className="stat-chart">
          <div id="sparkline_barx"></div>
        </div>
        <div className="stat-number">
          <div className="title">
            {this.props.title}
          </div>
          <div className="number">{this.props.caption}</div>
        </div>
      </div>
    );
  }
});
