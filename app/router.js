import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-goal');
  this.route('home', { path: '/'});
  this.route('goals');
});

export default Router;
