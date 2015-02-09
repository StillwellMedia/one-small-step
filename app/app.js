import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);


// basic point object
var Point = Ember.Object.extend({ 
	x: null, 
	y: null, 
	z: null,
	logX: function(){ 
		//console.log('Log X :',  this.get('x')); 
		return this; // returning this allows chaining like jQuery
	}
});

// extended point object
var PointPlus = Point.extend({
	squareX: function () {
		var x = this.get('x');
		return x * x;
	}.property(), // putting property on this marks it as a 'Computed Property' 
				  //(Like a variable you can access who's value is dynaminc)
				  // Despite the fact that this is a function you can only access the value like so:
				  // point.get('squareX')

	add: function(){ 
		//console.log('Add...'); 
		this.set('x', this.get('x')+1 );
		return this;  // returning this allows chaining like jQuery
	},
	xDidChange: function(){
		//console.log( 'Observer: X has changed, X is now:', this.get('x') );
	}.observes('x').on('init') // on init catches the initial value setting
});

// instance of extended point obj
var point = PointPlus.create({
	x: 20, 
	y: 1
});

point.logX().add().logX();

//console.log( point.get('squareX') );

export default App;
