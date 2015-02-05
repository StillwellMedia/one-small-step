import Ember from 'ember';

export default Ember.Controller.extend({
	goalTitle: '',
	
	goalDescription: '',

	submitForm: function (){
		var that = this;
		var newGoal = this.newGoal();
		newGoal.save().then(function( goal ){
			that.newStep( goal );
		});
	},

	resetForm: function (){
		this.set('goalTitle', '');
		this.set('goalDescription', '');
	},

	newGoal: function( ) {
		return this.store.createRecord('goal', {
		  title: this.get('goalTitle'),
		  description: this.get('goalDescription')
		});
    },

    newStep: function( newGoal ) {
    	var that = this;
		var newStep = this.store.createRecord('step', {
		  title: 'new step',
		  goal: newGoal	
		});
		newStep.save().then( that.resetForm() );
    },

    actions : {
    	// 'this' context is the Controller, Route, View or Component object.
		createNew: function() {
			this.submitForm();
		}
	}
});
