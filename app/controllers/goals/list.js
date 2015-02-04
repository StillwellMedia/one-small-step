import Ember from 'ember';

export default Ember.ObjectController.extend({
	numGoals: function() {
        return this.get('goals.length');
    }.property('goals.[]'), // function is updated when goals array changes

	hasItems: function() {
        return this.get('numGoals') > 0;
    }.property('numGoals'),

    destroyGoal: function( id ) {
  		this.store.find('goal', id ).then(function (goal) {
			goal.destroyRecord();
		  //need to also destroy steps
		});
    }, 

    actions : {
		delete: function( goal ) {
			this.destroyGoal( goal.get('id') );
		}
	}
});
 