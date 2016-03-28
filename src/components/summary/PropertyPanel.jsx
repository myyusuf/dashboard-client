var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var NumberStats = require('../NumberStats');

module.exports = PropertyPanel = React.createClass({
  statics:{

  },
  getDefaultProps: function() {
    return {
      id: '',
      title: 'Title',
      caption: 'Caption',
      position: 0
    }
  },
  render: function() {

    return (
      <Row className="number-stats">
        <Col md={6} sm={6} xs={6} className="margin-bottom-20">
            <NumberStats title="Total Unit" caption="0"/>
        </Col>
        <Col md={6} sm={6} xs={6} className="margin-bottom-20">
            <NumberStats title="Unit Terjual" caption="0" position={NumberStats.positionRight}/>
        </Col>
      </Row>
    );
  }
});
