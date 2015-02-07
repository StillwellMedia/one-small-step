import Ember from 'ember';

export default Ember.Controller.extend({
	goalTitle: '',
	
	goalDescription: '',

	stepFields: [],

	userHasEnteredText: function() {
		var bool = false;

		$('form input[type=text], form textarea').each(function(){
		 	if ( $(this).val().length > 0 ) {
		 		bool = true;
		 		return false;
		 	}
		});

		return bool;
	},

	hasSteps: function() {
		return this.get('stepFields').length > 0;
	}.property('stepFields.[]'),

	submitForm: function() {
		var that = this;
		var newGoal = this.newGoal();
		newGoal.save().then(function( goal ){

			that.get('stepFields').forEach(function( field ){
				that.newStep( field.value, goal );
			});
			that.resetForm();
		});
	},

	resetForm: function() {
		this.set('goalTitle', '');
		this.set('goalDescription', '');
		this.get('stepFields').clear();
	},

	newGoal: function() {
		return this.store.createRecord('goal', {
		  title: this.get('goalTitle'),
		  description: this.get('goalDescription')
		});
    },

    newStep: function( text, newGoal ) {
		var newStep = this.store.createRecord('step', {
		  title: text,
		  goal: newGoal	
		});
		newStep.save();
    },

    actions : {
    	// 'this' context is the Controller, Route, View or Component object.
		createNew: function() {
			this.submitForm();
		},
		
		reset: function() {
			this.resetForm();
		},

		addStepField: function() {
			this.get('stepFields').pushObject({value: ''});
		}
	}
});
