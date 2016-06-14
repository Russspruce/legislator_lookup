import Ember from 'ember';

export default Ember.Component.extend({

  showMoreUpcomingBill: false,
  actions: {

    showMoreBill: function() {
      this.set('showMoreUpcomingBill', true);
    },

    hideMoreBill: function() {
      this.set('showMoreUpcomingBill', false);
    }
  }

});
