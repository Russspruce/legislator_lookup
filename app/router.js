import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee-route', {path: '/committee-route'});
  this.route('subcommittees', {path: '/subcommittee/:committee_id'});
  this.route('bills');
  this.route('upcomingbills');
});

export default Router;
