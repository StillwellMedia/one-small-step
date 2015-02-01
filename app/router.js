import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/'});
  this.resource('goals', function(){ //goals template persists throught all sub routes as wrapper
  	//there is an undeclared goals/index route that is rendered into the /goals page
  	this.route('new');
  	this.route('list');  // ember g route goals/list // then re-write the router code
	this.route('goal', { path: '/goal/:goal_id' });
	//this.route('edit', { path: '/goal/:goal_id'/edit });
  });
  this.route('fileNotFound', {path: '/*wildcard'}); //404 page
});

export default Router;
   
