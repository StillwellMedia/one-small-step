import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, playlist) {
		Ember.debug('test route', controller );
    	// controller.set('model', playlist.get('songs'));
  	}
});
