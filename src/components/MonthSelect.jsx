var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {}
  },
  getDefaultProps: function() {
    return {
    }
  },
  change: function(event){

    console.log('month selec onchange called....');
    if(this.props.change){
        this.props.change(event);
    }
  },
  componentWillMount: function() {},
  render: function() {

    return (
      <select className="custom-select"
        onChange={this.change}
        style={this.props.style}
        value={this.props.value}
        defaultValue="0"
        >
          <option value="0" disabled>Bulan</option>
          <option value="1">Januari</option>
          <option value="2">Februari</option>
          <option value="3">Maret</option>
          <option value="4">April</option>
          <option value="5">Mei</option>
          <option value="6">Juni</option>
          <option value="7">Juli</option>
          <option value="8">Agustus</option>
          <option value="9">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
      </select>
    );

  }
});
