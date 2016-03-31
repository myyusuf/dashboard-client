var Reflux = require('reflux');
var Actions = require('./Actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getViewerData: function(rangeData) {

    console.log('WgPdfViewer data onchange ');
    
    this.trigger('change', rangeData);
  }
});
