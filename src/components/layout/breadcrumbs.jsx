var React = require('react');
var MonthSelect = require('../MonthSelect');
var YearSelect = require('../YearSelect');

var Actions = require('../../stores/Actions');

module.exports = React.createClass({
  getInitialState: function() {
    var _moment = moment().subtract(1, 'months');

    return {
      year: _moment.year(),
      month: _moment.month()+1
    }
  },
  componentWillMount: function() {
    this.sendActions();
  },
  componentDidUpdate: function(previousProps, previousState){
    this.sendActions();
  },
  sendActions: function(){
    Actions.getNetProfitData({
      year: this.state.year,
      month: this.state.month
    });
  },
  monthChange: function(event) {

    var _month = event.target.value;

    this.setState({
      month: _month
    });
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
          <MonthSelect change={this.monthChange} value={this.state.month}/>
          <YearSelect value={this.state.year} style={_selectStyle}/>
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
