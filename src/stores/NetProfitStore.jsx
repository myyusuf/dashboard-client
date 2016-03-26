var Reflux = require('reflux');
var Actions = require('./Actions');
var Api = require('../utils/Api');
var StoreConstant = require('./StoreConstant');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getNetProfitData: function(id) {
    Api.get(StoreConstant.NET_PROFIT_DATA_PATH).then(function(json) {
      this.result = json;
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.result);
  }
});
