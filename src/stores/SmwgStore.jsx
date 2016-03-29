var Reflux = require('reflux');
var Actions = require('./Actions');
var Api = require('../utils/Api');
var StoreConstant = require('./StoreConstant');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getNetProfitData: function(rangeData) {
    var _url = StoreConstant.SMWG_DATA_PATH + rangeData.year + '/' + rangeData.month;

    this.trigger('change', {eventType: 'startRequest', data: null});

    Api.get(_url)
    .then(function(json) {
      this.result = {eventType: 'success', data: json};
      this.triggerChange();
    }.bind(this))
    .catch(function(ex) {
      console.log('parsing failed', ex);
      this.result = {eventType: 'error', data: null};
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.result);
  }
});
