import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url= 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&apikey=0436f6ae813e43c6ae1a29d350ed8599';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      });
    }
});
