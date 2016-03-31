var React = require('react');
var Header = require('./layout/Header');
var Summary = require('./summary/Summary');
var Breadcrumbs = require('./layout/Breadcrumbs');
var MonthFilter = require('./MonthFilter');

var Actions = require('../stores/Actions');

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

    // console.log('location : ' + this.props.location.pathname);
    // console.log('params : ' + JSON.stringify(this.props.params, null, 4));
    Actions.getViewerData({year: this.state.year, month: this.state.month});

    var _subMenu = this.props.params.viewerType;

    return <div>
      <Header/>
      <Breadcrumbs subMenu={_subMenu}>
        <MonthFilter initialMonth={this.state.month} initialYear={this.state.year} onFilterChange={this.handleFilterChange}/>
      </Breadcrumbs>
      {this.content()}
    </div>
  },
  content: function() {
    if(this.props.children) {

      return(
        <div className="page-container page-content-inner page-container-bg-solid">
          {this.props.children}
        </div>
      );
    } else {
      return <div className="page-container page-content-inner page-container-bg-solid">
        <Summary month={this.state.month} year={this.state.year}></Summary>
      </div>
    }
  }
});
