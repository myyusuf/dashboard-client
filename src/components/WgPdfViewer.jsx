var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var SimplePortlet = require('./SimplePortlet');
var Constant = require('./Constant');

module.exports = React.createClass({
  getInitialState: function() {
    return {}
  },
  getDefaultProps: function() {
    return {
    }
  },
  render: function() {

    var _src = '/ViewerJS/#..'+ Constant.VIEW_PDF_PATH +
    this.props.params.viewerType + '/' +
    this.props.params.year + '/';

    if(this.props.params.month){
        _src += this.props.params.month + '/';
    }

    _src += 'project_file.pdf';

    return (
      <div className="container-fluid container-lf-space">
        <Row>
          <Col md={12} className="margin-bottom-20">
            <SimplePortlet title={this.props.params.viewerType}>
              <iframe src={_src} width="100%" height="600" allowFullScreen webkitallowfullscreen></iframe>
            </SimplePortlet>
          </Col>
        </Row>
      </div>
    );

  }
});
