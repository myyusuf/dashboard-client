var React = require('react');
var Header = require('./layout/Header');
var Summary = require('./summary/Summary');
var Breadcrumbs = require('./layout/Breadcrumbs');

module.exports = React.createClass({
  render: function() {
    return <div>
      <Header />
      <Breadcrumbs></Breadcrumbs>
      {this.content()}
    </div>
  },
  content: function() {
    // if(this.props.children) {
    //   return this.props.children
    // } else {
      return <div className="page-container page-content-inner page-container-bg-solid">
        <Summary></Summary>
       </div>
    // }
  }
});
