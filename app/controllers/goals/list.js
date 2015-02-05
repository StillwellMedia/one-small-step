import Ember from 'ember';

export default Ember.ObjectController.extend({
	numGoals: function() {
        return this.get('goals.length');
    }.property('goals.[]'), // function is updated when goals array changes

	hasItems: function() {
        return this.get('numGoals') > 0;
    }.property('numGoals'),

    destroyGoal: function( goal ) {
    	var store = this.store;

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
			this.destroyGoal( goal );
		}
	}
});
 