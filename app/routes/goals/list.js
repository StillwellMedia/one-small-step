import Ember from 'ember';

export default Ember.Route.extend({
actions: {
	    willTransition: function(){
	    	// If I don't do this the url will include the last query params used.
	    	this.controller.send('filterReset');

	    }
	}
});
