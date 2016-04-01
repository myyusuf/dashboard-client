var React = require('react');
var Reflux = require('reflux');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Table = ReactBootstrap.Table;

var Formatter = require('../../utils/Formatter');
var Actions = require('../../stores/Actions');
var PropertyStore = require('../../stores/PropertyStore');

var NumberStats = require('../NumberStats');

module.exports = PropertyTable = React.createClass({
  statics: {},
  mixins: [Reflux.listenTo(PropertyStore, 'onChange')],
  getInitialState: function() {
    return {
      propertyUnitList: []
    }
  },
  getDefaultProps: function() {
    return {id: '', title: 'Title', caption: 'Caption'}
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
  getTableData: function(){
    var _dataList = this.state.propertyUnitList.map(function(propertyUnit){
      return (
          <tr key={propertyUnit.unitName}>
            <td>{propertyUnit.unitName}</td>
            <td>{Formatter.formatNumber(propertyUnit.unitCountThisMonth, 0)}</td>
            <td>{Formatter.formatNumber(propertyUnit.unitCountUntilThisMonth, 0)}</td>
            <td>{Formatter.formatNumber(propertyUnit.unitSoldCountThisMonth)}</td>
            <td>{Formatter.formatNumber(propertyUnit.unitSoldCountUntilThisMonth)}</td>
          </tr>
      )
    }.bind(this));

    return _dataList;
  },
  render: function() {
    return (
      <Table id={this.props.id} responsive className="table table-striped table-bordered table-advance table-hover">
        <thead>
          <tr>
            <th rowSpan="2">Nama Unit Property</th>
            <th colSpan="2">Jumlah Unit</th>
            <th colSpan="2">Jumlah Terjual</th>
          </tr>
          <tr>
            <th>Bulan Ini</th>
            <th>S/d Bulan ini</th>
            <th>Bulan Ini</th>
            <th>S/d Bulan ini</th>
          </tr>
        </thead>
        <tbody>
          {this.getTableData()}
        </tbody>
      </Table>
    );
  }
});
