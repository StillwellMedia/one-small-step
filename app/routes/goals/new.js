import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
	    willTransition: function( transition ){

	    	if ( this.controller.userHasEnteredText() ){
	    		if ( window.confirm("Your changes will be lost if you leave this page, do you really want to leave?") ) { 
		    		this.controller.resetForm();
		    	} else {
		    		transition.abort();
		    	}
	    	}
	    }
	}
});
