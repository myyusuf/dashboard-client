var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = require('./panel');

module.exports = React.createClass({
  render: function() {
    return <div className="container-fluid container-lf-space"> 
        <Row className="widget-row">
            <Col md={3} className="margin-bottom-20">
              <Panel></Panel>
            </Col>
          </Row>
        </div>
  }
});
