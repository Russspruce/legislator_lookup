import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url= 'http://congress.api.sunlightfoundation.com/bills?apikey=0436f6ae813e43c6ae1a29d350ed8599';
      return Ember.$.getJSON(url).then(function(responseJSON) {
            console.log(responseJSON);
        return responseJSON.results;


      });
    }

});
