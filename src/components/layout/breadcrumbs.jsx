var React = require('react');

module.exports = React.createClass({

  render: function() {

    var _linkStyle = {
      marginTop: '5px'
    }

    return <div className="breadcrumbs wg-fixed-top">
      <div className="container-fluid">

        {this.props.children}

        <ol className="breadcrumbs-list" style={_linkStyle}>
          <li>
            <a className="breadcrumbs-item-link" href="#">Home</a>
          </li>
        </ol>
      </div>
    </div>
  }
});
