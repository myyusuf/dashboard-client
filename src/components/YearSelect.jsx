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
  getOptions: function(){
    var _years = Constant.YEAR_LIST;
    var _optionList = _years.map(function(year){
      return <option value={year} key={year}>{year}</option>
    }.bind(this));

    return _optionList;
  },
  change: function(event){
    if(this.props.change){
        this.props.change(event);
    }
  },
  render: function() {
    var _years = Constant.YEAR_LIST;
    return (
      <select
        className="custom-select"
        style={this.props.style}
        value={this.props.value}
        onChange={this.change}
        defaultValue={_years[_years.length - 1]}
        >
          {this.getOptions()}
      </select>
    );

  }
});
