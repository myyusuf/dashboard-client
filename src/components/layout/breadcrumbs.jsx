var React = require('react');
var MonthSelect = require('../MonthSelect');
var YearSelect = require('../YearSelect');

var Actions = require('../../stores/Actions');

module.exports = React.createClass({
  getInitialState: function() {
    var _moment = moment().subtract(1, 'months');

    return {
      yearDefaultValue: _moment.year(),
      monthDefaultValue: _moment.month()+1
    }
  },
  componentWillMount: function() {
    Actions.getNetProfitData();
  },
  render: function() {

    var _selectStyle = {
      marginLeft: '10px'
    }

    var _linkStyle = {
      marginTop: '5px'
    }

    return <div className="breadcrumbs wg-fixed-top">
      <div className="container-fluid">
        <div className="breadcrumbs-select">
          <label className="breadcrumbs-filter">Filter</label>
          <MonthSelect value={this.state.monthDefaultValue}/>
          <YearSelect value={this.state.yearDefaultValue} style={_selectStyle}/>
        </div>

        <ol className="breadcrumbs-list" style={_linkStyle}>
          <li>
            <a className="breadcrumbs-item-link" href="#">Home</a>
          </li>
        </ol>
      </div>
    </div>
  }
});
