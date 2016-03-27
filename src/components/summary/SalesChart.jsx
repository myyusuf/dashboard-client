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
        "actual": 52.727
      }, {
        "month": "Feb",
        "plan": 336.515,
        "actual": 0
      }, {
        "month": "Mar",
        "plan": 1650.662,
        "actual": 0
      }, {
        "month": "Apr",
        "plan": 1893.504,
        "actual": 0
      }, {
        "month": "Mei",
        "plan": 1913.385,
        "actual": 0
      }, {
        "month": "Jun",
        "plan": 1932.368,
        "actual": 0
      }, {
        "month": "Jul",
        "plan": 2251.404,
        "actual": 0
      }, {
        "month": "Ags",
        "plan": 2447.976,
        "actual": 0
      }, {
        "month": "Sep",
        "plan": 2469.952,
        "actual": 0
      }, {
        "month": "Okt",
        "plan": 2515.469,
        "actual": 0
      }, {
        "month": "Nov",
        "plan": 2547.981,
        "actual": 0
      }, {
        "month": "Des",
        "plan": 2600,
        "actual": 0
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
        valueWidth: 150,
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
