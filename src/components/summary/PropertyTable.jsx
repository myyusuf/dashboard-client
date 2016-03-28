var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Table = ReactBootstrap.Table;

var NumberStats = require('../NumberStats');

module.exports = PropertyTable = React.createClass({
  statics: {},
  getDefaultProps: function() {
    return {id: '', title: 'Title', caption: 'Caption'}
  },
  render: function() {
    return (
      <Table responsive className="table table-striped table-bordered table-advance table-hover">
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>mdo</td>
            <td>mdo</td>
          </tr>

        </tbody>
      </Table>
    );
  }
});
