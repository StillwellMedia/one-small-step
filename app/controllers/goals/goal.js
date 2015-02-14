import Ember from 'ember';

export default Ember.ObjectController.extend({
	numSteps: function(){
	  	var steps = this.get('steps');
    	return steps.get('length');
    	
	}.property('steps'),

	isCompleted: function(){
	  	var steps = this.get('steps');

	  	if ( this.get('numSteps') > 0 ){ 

    		return steps.filterBy('isCompleted', true).get('length') === steps.get('length');
    	} else {

    		return false;
    	}
    	
	}.property('steps.@each.isCompleted')
});