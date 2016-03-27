var Fetch = require('whatwg-fetch');

module.exports = {
  get: function(url) {
    return fetch(url)
    .then(function(response){
      console.log('response : ' + response);
      return response.json()
    });
  }
};
