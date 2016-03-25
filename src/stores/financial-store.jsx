var Reflux = require('reflux');
var Actions = require('./actions');
var Api = require('../utils/api');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getNetProfitData: function(id){
    Api.get('/sample/net-profit.json')
      .then(function(json){
        console.log('json.test : ' + json.test);
        this.netProfitData = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.netProfitData);
  }
});
