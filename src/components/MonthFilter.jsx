var React = require('react');

var MonthSelect = require('./MonthSelect');
var YearSelect = require('./YearSelect');

var Actions = require('../stores/Actions');

module.exports = React.createClass({
  getInitialState: function() {
    var _moment = moment().subtract(1, 'months');
    var _year = null;
    var _month = null;

    if (this.props.initialYear) {
      _year = this.props.initialYear;
    } else {
      _year = _moment.year();
    }

    if (this.props.initialMonth) {
      _month = this.props.initialMonth;
    } else {
      _month = _moment.month() + 1
    }
    return {year: _year, month: _month}
  },
  getDefaultProps: function() {
    return {onFilterChange: null}
  },
  monthChange: function(event) {

    var _month = event.target.value;
    //Must be called before setState, dont call on componentDidUpdate
    this.props.onFilterChange(_month, this.state.year);

    this.setState({month: _month});
  },
  yearChange: function(event) {

    var _year = event.target.value;
    //Must be called before setState, dont call on componentDidUpdate
    this.props.onFilterChange(this.state.month, _year);

    this.setState({year: _year});
  },
  componentWillMount: function() {},
  render: function() {

    var _selectStyle = {
      marginLeft: '10px'
    }

    console.log('monthFilter render called....');

    return (
      <div className="breadcrumbs-select">
        <label className="breadcrumbs-filter">Filter</label>
        <MonthSelect change={this.monthChange} value={this.state.month}/>
        <YearSelect change={this.yearChange} value={this.state.year} style={_selectStyle}/>
      </div>
    );

  }
});
