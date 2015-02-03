import Ember from 'ember';

export default Ember.ObjectController.extend({
	hasItems: function() {
        return this.get('numGoals') > 0;
    }.property('numGoals'),

	numGoals: function() {
		console.log(this.get('goals'));
        return this.get('goals.length');
    }.property('goals.[]') // function is updated when goals array changes
});
 