import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/'});
  this.resource('goals', function(){ //goals template persists throught all sub routes as wrapper
  	// undeclared: index
    // undeclared: loading
    // undeclared: error
  	this.route('new');
  	this.route('list');  // ember g route goals/list // then re-write the router code
	  this.route('goal', { path: '/goal/:goal_id' });
	  //this.route('edit', { path: '/goal/:goal_id'/edit });
  });
  this.route('fileNotFound', {path: '/*wildcard'});

});

export default Router;
