import Ember from 'ember';

export default Ember.Controller.extend({
	goalTitle: '',
	
	goalDescription: '',

	stepFields: [],

	// Return true if any of the fields in the form have text in them
	userHasEnteredText: function() {
		return ( this.get('goalTitle') || this.get('goalDescription') || this.get('hasStepText') );
	},

	// Return true if any step fields exist
	hasSteps: function() {
		return this.get('stepFields').length > 0;

	}.property('stepFields.[]'),

	// Return true if the user has entered text in any step field
	hasStepText: function() {
	    var steps = this.get('stepFields');

	    return steps.filterBy('value').get('length') > 0;

  	}.property('stepFields.@each.value'),

  	// Create new Goal Record
  	newGoal: function() {
		return this.store.createRecord('goal', {
		  title: this.get('goalTitle'),
		  description: this.get('goalDescription')
		});
    },

    // Create new Step Record and save
    newStep: function( text, newGoal ) {
		var newStep = this.store.createRecord('step', {
		  title: text,
		  goal: newGoal	
		});
		newStep.save();
    },

	submitForm: function() {
		var that = this;
		var newGoal = this.newGoal();
		
		newGoal.save().then(function( goal ){

			// filterBY = only createRecord for step fields that have text ( value )
			that.get('stepFields').filterBy('value').forEach(function( field ){
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
