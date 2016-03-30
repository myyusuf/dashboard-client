var React = require('react');
var Reflux = require('reflux');

var Utils = require('../../utils/Utils');

var FinancialStore = require('../../stores/FinancialStore');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(FinancialStore, 'onChange')],
  getInitialState: function() {
    return {
      chart: null
    }
  },
  getDefaultProps: function() {
    var _randomId = 'financialChart_' + Utils.generateUUID();
    return {
      id: _randomId,
      title: 'Title'
    }
  },
  onChange: function(event, result) {

    var _eventType = result.eventType;

    if(_eventType === 'success'){
      // this.setState({chartData: result.data});
      this.state.chart.dataProvider = [];
      this.state.chart.dataProvider = result.data;
      this.state.chart.validateData();
      App.unblockUI('#' + this.props.id);

    }else if(_eventType === 'error'){
      // this.setState({chartData: []});
      this.state.chart.dataProvider = [];
      this.state.chart.validateData();
      App.unblockUI('#' + this.props.id);
    }else if(_eventType === 'startRequest'){
      App.blockUI({
          target: '#' + this.props.id,
          boxed: true
      });
    }
  },
  componentDidMount() {

    var _chart = AmCharts.makeChart(this.props.id, {
      "type": "serial",
      "theme": "light",
      "dataDateFormat": "YYYY-MM-DD",
      "precision": 2,
      "valueAxes": [
        {
          "id": "v1",
          "title": "Milyar(Rp)",
          "position": "left",
          "autoGridCount": false
        }
      ],
      "graphs": [
        {
          "id": "g3",
          "valueAxis": "v1",
          "lineColor": "#0B2DA4",
          "fillColors": "#0B2DA4",
          "fillAlphas": 1,
          "type": "column",
          "title": "Tagihan Bruto",
          "valueField": "tagihanBruto",
          "clustered": false,
          "columnWidth": 0.5,
          "legendValueText": "Rp. [[value]]M",
          "balloonText": "[[title]]<br/><b style='font-size: 130%'>Rp. [[value]]M</b>"
        }, {
          "id": "g4",
          "valueAxis": "v1",
          "lineColor": "#62cf73",
          "fillColors": "#62cf73",
          "fillAlphas": 1,
          "type": "column",
          "title": "Piutang Usaha",
          "valueField": "piutangUsaha",
          "clustered": false,
          "columnWidth": 0.3,
          "legendValueText": "Rp. [[value]]M",
          "balloonText": "[[title]]<br/><b style='font-size: 130%'>Rp. [[value]]M</b>"
        }, {
          "id": "g1",
          "valueAxis": "v2",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "lineColor": "#20acd4",
          "type": "smoothedLine",
          "title": "Penjualan Ra",
          "useLineColorForBulletBorder": true,
          "valueField": "penjualanRa",
          "legendValueText": "Rp. [[value]]M",
          "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]M</b>"
        }, {
          "id": "g2",
          "valueAxis": "v2",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "lineColor": "#FFC300",
          "type": "smoothedLine",
          "dashLength": 5,
          "title": "Penjualan Ri",
          "useLineColorForBulletBorder": true,
          "valueField": "penjualanRi",
          "legendValueText": "Rp. [[value]]M",
          "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]M</b>"
        }
      ],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 50,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2
      },
      "categoryField": "bulan",
      "categoryAxis": {
        "parseDates": false,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "legend": {
        bulletType: "round",
        equalWidths: false,
        // valueWidth: 120,
        useGraphSettings: true,
        color: "#6c7b88"
      },
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "export": {
        "enabled": true
      },
      "dataProvider": this.state.chartData
    });

    this.setState({
      chart: _chart
    });

  },
  render: function() {
    return (<div id={this.props.id} className="CSSAnimationChart"></div>);

  }
});
