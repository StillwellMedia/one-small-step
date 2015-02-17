import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',

	collapsed: true,

	showSteps: false,

	hasSteps: function(){
		return this.get('steps.length') > 0;
	}.property(),

	collapseToggleObserver: function(){
		var that = this;

		if ( !this.get('collapsed') && this.get('hasSteps') ){
			// put steps in dom
			// then open steps
			this.set('showSteps', true);
			this.animateSteps();
		} else {
			// close steps
			// then remove steps from dom
			this.animateSteps(function(){
				that.set('showSteps', false);
			});
		}
	}.observes('collapsed'),

	animateSteps: function( callback ) {
		Ember.run.scheduleOnce('afterRender', this, function() {

			this.$('.steps').slideToggle(200, function() {
				 if ( typeof callback === 'function' ) { 
				 	callback.call(); 
				 }
			});
		});
	},

	actions : { 	

		delete: function( goal ) {
			// console.log('delete in component', goal);
			// in index hbs this action is sent to goal controller because 
			// the item controller is declared like so:
			// {{#each filteredGoals itemController="goals.goal"}}
			// 
			// Alt: this.sendAction('delete', goal);
			//
			//http://emberjs.com/guides/components/sending-actions-from-components-to-your-application/
			this.sendAction('action', goal);
		},

		toggleSteps: function() {
			this.set('collapsed', !this.get('collapsed'));
		}
	}
});
