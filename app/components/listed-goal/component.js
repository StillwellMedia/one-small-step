import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',

	 actions : { 	

		delete: function( goal ) {
			// console.log('delete in component', goal);//, this.get('controller'));
			// in index hbs this action is sent to goal controller because 
			// the item controller is declared like so:
			// {{#each filteredGoals itemController="goals.goal"}}
			// have to put delete="delete" in component {{ expession }}
			this.sendAction('delete', goal);
		}
	}
});
