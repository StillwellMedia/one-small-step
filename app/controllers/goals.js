import Ember from 'ember';

export default Ember.ObjectController.extend({
    // didInsertElement: function
	numGoals: function() {
        return this.get('goals.length');
    }.property('goals.[]'), // function is updated when goals array changes

	hasItems: function() {
        return this.get('numGoals') > 0;
    }.property('numGoals'),

    randomGoal : function () {
    	var max = this.get('numGoals');
    	var randomArrayPosition = Math.round( Math.random() * (max - 1));
    	var goal = this.get('goals').toArray()[randomArrayPosition];

		return goal.get('id'); // returning the goal id instead of a random number alone 
							   // prevents the app from being directed to a non-existant goal
    }
});
