var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({

  getSubMenu: function(){
    var _result = [];

    if(this.props.subMenu){
      _result.push(<li key={this.props.subMenu}>
        <a className="breadcrumbs-item-link" href="#">{this.props.subMenu}</a>
      </li>);
    }

    return _result;
  },
  render: function() {

    var _linkStyle = {
      marginTop: '5px'
    }

    return (

      <div className="breadcrumbs wg-fixed-top">
        <div className="container-fluid">

          {this.props.children}

          <ol className="breadcrumbs-list" style={_linkStyle}>
            <li>
              <Link to={"/"} className="">Home</Link>
            </li>
            {this.getSubMenu()}
          </ol>
        </div>
      </div>
    );
  }
});
