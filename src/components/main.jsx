var React = require('react');
var Header = require('./layout/Header');
var Summary = require('./summary/Summary');
var Breadcrumbs = require('./layout/Breadcrumbs');
var MonthFilter = require('./MonthFilter');

module.exports = React.createClass({

  getInitialState: function() {

    var _moment = moment().subtract(1, 'months');

    return {
      year: _moment.year(),
      month: _moment.month() + 1
    }
  },

  handleFilterChange: function(month, year) {
    this.setState({month: month, year: year});
  },
  render: function() {

    return <div>
      <Header/>
      <Breadcrumbs>
        <MonthFilter initialMonth={this.state.month} initialYear={this.state.year} onFilterChange={this.handleFilterChange}/>
      </Breadcrumbs>
      {this.content()}
    </div>
  },
  content: function() {
    if(this.props.children) {
      return this.props.children
    } else {
      return <div className="page-container page-content-inner page-container-bg-solid">
        <Summary month={this.state.month} year={this.state.year}></Summary>
      </div>
    }
  }
});
