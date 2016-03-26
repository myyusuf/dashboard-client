var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {}
  },
  getDefaultProps: function() {
    return {title: 'Title'}
  },
  componentDidMount() {

    var chartData = [
      {
        "bulan": "Jan",
        "penjualanRa": 110.365,
        "penjualanRi": 131.044,
        "piutangUsaha": 223.9008,
        "tagihanBruto": 413.40089
      }, {
        "bulan": "Feb",
        "penjualanRa": 222.925,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Mar",
        "penjualanRa": 336.759,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Apr",
        "penjualanRa": 466.732,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Mei",
        "penjualanRa": 600.744,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Jun",
        "penjualanRa": 736.969,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Jul",
        "penjualanRa": 886.182,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Ags",
        "penjualanRa": 1046.702,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Sep",
        "penjualanRa": 1215.714,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Okt",
        "penjualanRa": 1438.584,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Nov",
        "penjualanRa": 1671.232,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }, {
        "bulan": "Des",
        "penjualanRa": 1900,
        "penjualanRi": 0,
        "piutangUsaha": 0,
        "tagihanBruto": 0
      }
    ];

    var chart = AmCharts.makeChart('dashboard_amchart_1', {
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
          "lineColor": "#e1ede9",
          "fillColors": "#e1ede9",
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
          "lineColor": "#e1ede9",
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
        "useGraphSettings": true,
        valueWidth: 120,
        "position": "top"
      },
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "export": {
        "enabled": true
      },
      "dataProvider": chartData
    });
  },
  componentWillMount: function() {},
  render: function() {
    return (<div id="dashboard_amchart_1" className="CSSAnimationChart"></div>);

  }
});
