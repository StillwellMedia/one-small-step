import Ember from 'ember';

export default Ember.ObjectController.extend({
	numSteps: function(){
	  	var steps = this.get('steps');
    	return steps.get('length');
    	
	}.property('steps'),

	isCompleted: function(){
		var model = this.get('model');
	  	var steps = this.get('steps');

	  	if ( this.get('numSteps') > 0 ){ 
	  		if ( steps.filterBy('isCompleted', true).get('length') === steps.get('length') ) {

	    		model.set('isCompleted', true);
				model.save();
	  			return true;
	  		}
    	} else {
    		return false;
    	}
    	
	}.property('steps.@each.isCompleted'),

	destroyGoal: function( goal ) {
    	var store = this.store;

    	// console.log('destroy', goal.get('id'));
		
		// destroy steps associated with goal
		goal.get('steps').toArray().forEach( function( step ){
			store.find('step', step.get('id')).then( function( step ){
				 step.destroyRecord();
			});
		});

		// destroy goal
  		store.find('goal', goal.get('id') ).then( function ( thisGoal ) {
			 thisGoal.destroyRecord();
		});
    }, 

    actions : {
		delete: function( goal ) { 
			// console.log('delete in goal.js', goal);
			this.destroyGoal( goal );
		}
	}

});
