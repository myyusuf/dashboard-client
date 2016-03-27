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
        "month": "Jan",
        "plan": 16.99,
        "actual": 52.727,
        "projection": null
      }, {
        "month": "Feb",
        "plan": 336.515,
        "actual": 200,
        "projection": null
      }, {
        "month": "Mar",
        "plan": 1650.662,
        "actual": 250,
        "projection": null
      }, {
        "month": "Apr",
        "plan": 1893.504,
        "actual": 250,
        "projection": 250
      }, {
        "month": "Mei",
        "plan": 1913.385,
        "actual": null,
        "projection": 370
      }, {
        "month": "Jun",
        "plan": 1932.368,
        "actual": null,
        "projection": 380
      }, {
        "month": "Jul",
        "plan": 2251.404,
        "actual": null,
        "projection": 385
      }, {
        "month": "Ags",
        "plan": 2447.976,
        "actual": null,
        "projection": 500
      }, {
        "month": "Sep",
        "plan": 2469.952,
        "actual": null,
        "projection": 510
      }, {
        "month": "Okt",
        "plan": 2515.469,
        "actual": null,
        "projection": 515
      }, {
        "month": "Nov",
        "plan": 2547.981,
        "actual": null,
        "projection": 620
      }, {
        "month": "Des",
        "plan": 2600,
        "actual": null,
        "projection": 725
      }
    ];

    var chart = AmCharts.makeChart('sales_chart', {
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
          "id": "g1",
          "valueAxis": "v2",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 6,
          "hideBulletsCount": 50,
          "lineThickness": 3,
          "lineColor": "#20acd4",
          "type": "smoothedLine",
          "title": "Ra",
          "useLineColorForBulletBorder": true,
          "valueField": "plan",
          "legendValueText": "Rp. [[value]]M",
          "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]M</b>"
        },
        {
          "id": "g2",
          "valueAxis": "v2",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 6,
          "hideBulletsCount": 50,
          "lineThickness": 3,
          "lineColor": "#FFC300",
          "type": "smoothedLine",
          "title": "Ri",
          "useLineColorForBulletBorder": true,
          "valueField": "actual",
          "legendValueText": "Rp. [[value]]M",
          "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]M</b>"
        },
        {
          "id": "g3",
          "valueAxis": "v2",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 6,
          "hideBulletsCount": 50,
          "lineThickness": 3,
          "lineColor": "#A569BD",
          "type": "smoothedLine",
          "title": "Proyeksi",
          "useLineColorForBulletBorder": true,
          "valueField": "projection",
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
      "categoryField": "month",
      "categoryAxis": {
        "parseDates": false,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "legend": {
        bulletType: "round",
        equalWidths: false,
        // valueWidth: 150,
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
      "dataProvider": chartData
    });
  },
  componentWillMount: function() {},
  render: function() {
    return (
      <div id="sales_chart" className="CSSAnimationChart"></div>
    );

  }
});
