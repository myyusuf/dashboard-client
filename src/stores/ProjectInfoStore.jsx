var Reflux = require('reflux');
var Actions = require('./Actions');
var Api = require('../utils/Api');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getProjectInfoData: function(id) {
    Api.get('/sample/project-info.json').then(function(json) {
      this.result = json;
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.result);
  }
});
