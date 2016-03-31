var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Reflux = require('reflux');
var Actions = require('../stores/Actions');
var ViewerStore = require('../stores/ViewerStore');

var SimplePortlet = require('./SimplePortlet');
var Constant = require('./Constant');

var Utils = require('../utils/Utils');

var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var PDF = require('react-pdf');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ViewerStore, 'onChange')],
  getInitialState: function() {
    return {
      viewerType: this.props.params.viewerType,
      year: this.props.params.year,
      month: this.props.params.month
    }
  },
  getDefaultProps: function() {
    var _randomId = 'wgPdfViewer_' + Utils.generateUUID();
    return {
      id: _randomId,
    }
  },
  onChange: function(event, result){

    console.log('WgPdfViewer data onchange ');

    this.setState({
      year: result.year,
      month: result.month
    });
  },
  componentDidUpdate: function() {
    // $( '#' + this.props.id ).attr( 'src', function ( i, val ) { return val; });
    $('#' + this.props.id).replaceWith($('#' + this.props.id).clone());
  },
  _onPdfCompleted: function(page, pages){
    this.setState({page: page, pages: pages});
  },
  render: function() {

    var _src = '/ViewerJS/#..'+ Constant.VIEW_PDF_PATH +
    // var _src =  Constant.VIEW_PDF_PATH +
    this.state.viewerType + '/' +
    this.state.year + '/';

    if(this.state.month){
        _src += this.state.month + '/';
    }

    _src += 'project_file.pdf?time=' + Utils.generateUUID();

    // if(this.state.month  == 1){
    //   _src='http://www.google.co.id';
    // }

    return (
      <div className="container-fluid container-lf-space">
        <Row>
          <Col md={12} className="margin-bottom-20">
            <SimplePortlet title={this.props.params.viewerType}>
              <iframe id={this.props.id} src={_src} width="100%" height="600" allowFullScreen webkitallowfullscreen></iframe>
              {/*<PDF page={1} file={_src} onDocumentComplete={this._onDocumentComplete}/>*/}
            </SimplePortlet>
          </Col>
        </Row>
      </div>
    );

  }
});
