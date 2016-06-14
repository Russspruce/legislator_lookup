import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url= 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=0436f6ae813e43c6ae1a29d350ed8599&zip=' + params.zip;
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      });
  }
});
