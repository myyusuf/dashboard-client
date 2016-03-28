var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var NetProfitPanel = require('./NetProfitPanel');
var ProjectInfoPanel = require('./ProjectInfoPanel');
var ScoreCardPanel = require('./ScoreCardPanel');
var RiskInfoPanel = require('./RiskInfoPanel');
var SimplePortlet = require('../SimplePortlet');
var FinancialChart = require('./FinancialChart');
var SalesChart = require('./SalesChart');

var PropertyPanel = require('./PropertyPanel');

var Actions = require('../../stores/Actions');

module.exports = React.createClass({

  sendActions: function() {
    Actions.getNetProfitData({year: this.props.year, month: this.props.month});
    Actions.getPropertyData({year: this.props.year, month: this.props.month});
  },
  render: function() {

    this.sendActions();

    return (
      <div className="container-fluid container-lf-space">
        <Row className="widget-row">
          <Col md={3} className="margin-bottom-20">
            <NetProfitPanel id="wgNetProfitPanel"/>
          </Col>
          <Col md={3} className="margin-bottom-20">
            <ProjectInfoPanel />
          </Col>
          <Col md={3} className="margin-bottom-20">
            <ScoreCardPanel />
          </Col>
          <Col md={3} className="margin-bottom-20">
            <RiskInfoPanel />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="margin-bottom-20">
            <SimplePortlet title="Laporan Keuangan">
              <FinancialChart/>
            </SimplePortlet>
          </Col>
          <Col md={6} className="margin-bottom-20">
            <SimplePortlet title="Omzet Kontrak Baru">
              <SalesChart/>
            </SimplePortlet>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="margin-bottom-20">
            <SimplePortlet title="Property">
              <PropertyPanel />
            </SimplePortlet>
          </Col>
          <Col md={6} className="margin-bottom-20">
            <SimplePortlet title="SMWG">

            </SimplePortlet>
          </Col>
        </Row>
      </div>
    );
  }
});
