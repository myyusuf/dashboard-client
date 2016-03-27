var React = require('react');
var MonthSelect = require('../MonthSelect');
var YearSelect = require('../YearSelect');

module.exports = React.createClass({

  render: function() {

    var _selectStyle = {
      marginLeft: '10px'
    }

    var _linkStyle = {
      marginTop: '5px'
    }

    return <div className="breadcrumbs">
      <div className="container-fluid">
        <div className="breadcrumbs-select">
          <MonthSelect />
          <YearSelect style={_selectStyle}/>
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
