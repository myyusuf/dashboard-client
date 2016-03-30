var React = require('react');
var Reflux = require('reflux');

var Utils = require('../../utils/Utils');

var SalesStore = require('../../stores/SalesStore');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(SalesStore, 'onChange')],
  getInitialState: function() {
    return {
      chart: null
    }
  },
  getDefaultProps: function() {
    var _randomId = 'salesChart_' + Utils.generateUUID();
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
      "dataProvider": []
    });

    this.setState({
      chart: _chart
    });
  },
  render: function() {
    return (
      <div id={this.props.id} className="CSSAnimationChart"></div>
    );

  }
});
