var Reflux = require('reflux');
var Actions = require('./Actions');
var Api = require('../utils/Api');
var StoreConstant = require('./StoreConstant');
var WgStore = require('./WgStore');

module.exports = Reflux.createStore({
  mixins: [WgStore],
  getProjectInfoData: function(rangeData) {
    var _url = StoreConstant.PROJECT_INFO_DATA_PATH + rangeData.year + '/' + rangeData.month;
    this.getData(_url);
  }
});
