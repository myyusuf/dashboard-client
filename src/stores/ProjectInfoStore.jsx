var Reflux = require('reflux');
var Actions = require('./Actions');
var Api = require('../utils/Api');
var StoreConstant = require('./StoreConstant');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getProjectInfoData: function(params) {
    console.log('params : ' + params.test);
    Api.get(StoreConstant.PROJECT_INFO_DATA_PATH).then(function(json) {
      this.result = json;
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.result);
  }
});
