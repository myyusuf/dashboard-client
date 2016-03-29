var Reflux = require('reflux');
var Actions = require('./Actions');
var Api = require('../utils/Api');

module.exports = {
  listenables: [Actions],
  getData: function(url) {

    this.trigger('change', {eventType: 'startRequest', data: null});

    Api.get(url).then(function(json) {
      this.result = {
        eventType: 'success',
        data: json
      };
      this.triggerChange();
    }.bind(this)).catch(function(ex) {
      console.log('parsing failed', ex);
      this.result = {
        eventType: 'error',
        data: null
      };
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.result);
  }
};
