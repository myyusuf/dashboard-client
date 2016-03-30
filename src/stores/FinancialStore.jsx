var Reflux = require('reflux');
var Actions = require('./Actions');
var Api = require('../utils/Api');
var StoreConstant = require('./StoreConstant');
var WgStore = require('./WgStore');

module.exports = Reflux.createStore({
  mixins: [WgStore],
  getFinancialData: function(rangeData) {
    var _url = StoreConstant.FINANCIAL_DATA_PATH + rangeData.year;
    this.getData(_url);
  }
});
