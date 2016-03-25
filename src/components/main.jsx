var React = require('react');
var Header = require('./header');
var Summary = require('./summary');
var Breadcrumbs = require('./breadcrumbs');

module.exports = React.createClass({
  render: function() {
    return <div>
      <Header />
      {this.content()}
    </div>
  },
  content: function() {
    // if(this.props.children) {
    //   return this.props.children
    // } else {
      return <div className="page-container page-content-inner page-container-bg-solid">
        <Breadcrumbs></Breadcrumbs>
        <Summary></Summary>
       </div>
    // }
  }
});
