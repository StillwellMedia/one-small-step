import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',

	// Probably too coupled
	allExpanded: Ember.computed.alias("targetObject.parentController.allExpanded"), // linked to indexController

	allCollapsed: Ember.computed.alias("targetObject.parentController.allCollapsed"), // linked to indexController

	isCollapsed: true, // default is true

	showSteps: false,

	didInsertElement: function() {
		//establish the connection
		this.get('targetObject.parentController.allExpanded');
 		this.get('targetObject.parentController.allCollapsed');
	},

	hasSteps: function(){
		return this.get('steps.length') > 0;
	}.property(),

	thisCollapseToggleObserver: function(){
		var that = this;

		if ( !this.get('isCollapsed') && this.get('hasSteps') ){
			// put steps in dom
			// then open steps
			this.set('showSteps', true);
			this.set('allCollapsed', false);
			this.animateSteps();
		} else {
			// close steps
			// then remove steps from dom
			this.animateSteps(function(){
				that.set('showSteps', false);
				that.set('allExpanded', false);
			});
		}
	}.observes('isCollapsed'),

	controllerCollapseToggleObserver: function(){
		if ( this.get('allExpanded') ) {
			this.set('isCollapsed', false);
		}

		if ( this.get('allCollapsed') ) {
			this.set('isCollapsed', true);
		}

	}.observes('allExpanded', 'allCollapsed'),  

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
			this.sendAction('deleteAction', goal);
		},

		toggleSteps: function() {
	 	 	this.toggleProperty('isCollapsed');	 	 	

			return false;
		},

		setCompleted: function( ){
		 	this.sendAction('setCompletedAction');
		}
	}
});
