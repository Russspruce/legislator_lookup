import Ember from 'ember';

export default Ember.Component.extend({

  showMoreBill: false,
  actions: {

    showBill: function() {
      this.set('showMoreBill', true);
    },

    hideBill: function() {
      this.set('showMoreBill', false);
    }
  }

});
