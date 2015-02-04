import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
        	goals: this.store.find('goal'),
        	steps: this.store.find('step')
      	});
	},

    randomGoal : function () {
    	this.transitionTo('/goals/goal/' + this.get('controller').randomGoal());
    },

	actions : {
		random: function() {
			this.randomGoal(); 
		}
	}
});
