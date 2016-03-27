var React = require('react');
var Constant = require('./Constant');

module.exports = React.createClass({
  getInitialState: function() {
    return {}
  },
  getDefaultProps: function() {
    return {
      // title: 'Title',
    }
  },
  componentWillMount: function() {},
  getYears: function(){
    var _years = Constant.YEAR_LIST;
    var _optionList = _years.map(function(year){
      return <option value={year} key={year}>{year}</option>
    });

    return _optionList;
  },
  render: function() {

    return (
      <select className="custom-select" style={this.props.style} defaultValue="0">
          {this.getYears()}
      </select>
    );

  }
});
