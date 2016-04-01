var React = require('react');
var Reflux = require('reflux');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var NumberStats = require('../NumberStats');
var PropertyTable = require('./PropertyTable');

var Formatter = require('../../utils/Formatter');
var Actions = require('../../stores/Actions');
var PropertyStore = require('../../stores/PropertyStore');

module.exports = PropertyPanel = React.createClass({
  statics: {},
  mixins: [Reflux.listenTo(PropertyStore, 'onChange')],
  getInitialState: function() {
    return {
      propertyUnitList: []
    }
  },
  getDefaultProps: function() {
    return {id: '', title: 'Title', caption: 'Caption', position: 0}
  },
  onChange: function(event, result) {

    var _eventType = result.eventType;

    if(_eventType === 'success'){
      this.setState({propertyUnitList: result.data}, function(){
        App.unblockUI('#' + this.props.id);
      }.bind(this));
    }else if(_eventType === 'error'){
      this.setState({propertyUnitList: []}, function(){
        App.unblockUI('#' + this.props.id);
      }.bind(this));
    }else if(_eventType === 'startRequest'){
      App.blockUI({
          target: '#' + this.props.id,
          boxed: true
      });
    }

  },
  render: function() {

    var _total1 = 0;
    var _total2 = 0;
    var _propertyUnitList = this.state.propertyUnitList;

    for(var _i=0; _i<_propertyUnitList.length; _i++){
      var _propertyUnit = _propertyUnitList[_i];
      _total1 += _propertyUnit.totalUnit;
      _total2 += _propertyUnit.unitCountUntilThisMonth;
    }

    return (
      <div>
        <Row id={this.props.id} className="number-stats">
          <Col md={6} sm={6} xs={6} className="margin-bottom-20">
            <NumberStats title="Total Unit " caption={Formatter.formatNumber(_total1, 0)}/>
          </Col>
          <Col md={6} sm={6} xs={6} className="margin-bottom-20">
            <NumberStats title="Unit Terjual" caption={Formatter.formatNumber(_total2, 0)} position={NumberStats.positionRight}/>
          </Col>
        </Row>
        <PropertyTable id="wgPropertyTable"/>
      </div>
    );
  }
});
