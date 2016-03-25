var Reflux = require('reflux');
var Actions = require('./Actions');
var Api = require('../utils/Api');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getNetProfitData: function(id) {
    Api.get('/sample/net-profit.json').then(function(json) {
      this.result = json;
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.result);
  }
});
