import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
        	goals: this.store.find('goal'),
        	steps: this.store.find('step')
      	});
	}
});
