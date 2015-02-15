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
    	
	}.property('steps.@each.isCompleted')
});
