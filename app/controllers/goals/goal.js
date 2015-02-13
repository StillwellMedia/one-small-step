import Ember from 'ember';

export default Ember.ObjectController.extend({
	
	isCompleted: function(){
	  	var steps = this.get('steps');
    	return steps.filterBy('isCompleted', true).get('length') === steps.get('length');
    	
	}.property('steps.@each.isCompleted')
});