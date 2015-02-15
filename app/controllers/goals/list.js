import Ember from 'ember';
//import moment from 'bower_components/moment/moment';

export default Ember.ObjectController.extend({
	queryParams: ['editedDate'], // ?query to url
	
	editedDate: null, // ? =param to url

	filteredSet: null,

	filteredGoals: function() {
		var filteredSet = this.get('filteredSet');
		if (filteredSet) {
			console.log('ffilteredSet',filteredSet);
			return this.get('filteredSet');
        	
	    } else {
	    	console.log('else');
	        return this.get('goals');
	    }

    }.property('filteredSet'),

	filteredGoalss: function() {
        var editedDate = this.get('editedDate');
        var sortDate = moment( editedDate ).format('L'); //redundent now but won't be in the future
	    var goals = this.get('goals');
	    var filtered;

	    console.log('hi');

	    if ( editedDate ) {
	    	// Filter out the goals that match the provided date and show them 
	    	// http://emberjs.com/api/#method_computed_filter (goal, index, array)

	    	filtered = goals.filter(function(goal) {
			    return moment(goal.get('lastEdited')).format('L') === sortDate;
			});
			this.set('filteredSet', filtered);
	    } else {

	    	// // If no query show all goals
	    	// this.set('filteredSet', goals);
	    	// return goals; 
	    }

    }.property('editedDate','goals.[]'),//.observes('editedDate'),//.property('editedDate','goals.[]'), // function is updated when editedDate changes


	numGoals: function() {
        return this.get('goals.length');
    }.property('goals.[]'), // function is updated when goals array changes

	hasItems: function() {
        return this.get('numGoals') > 0;
    }.property('numGoals'),

    numFilteredGoals: function() {
        return this.get('filteredGoals.length');
    }.property('filteredGoals'), // function is updated when goals array changes

    hasFilteredItems: function() {
        return this.get('numFilteredGoals') > 0;
    }.property('numFilteredGoals'),

    destroyGoal: function( goal ) {
    	var store = this.store;

		// destroy steps associated with goal
		goal.get('steps').toArray().forEach( function( step ){

			store.find('step', step.get('id')).then( function( step ){
				step.destroyRecord();
			});
		});

		// destroy goal
  		store.find('goal', goal.get('id') ).then( function ( thisGoal ) {

			thisGoal.destroyRecord();
		});

    }, 

    actions : {
		delete: function( goal ) {
			this.destroyGoal( goal );
		},

		filterToday: function( ) {
			console.log('filter today');
			
			this.set('editedDate', moment(new Date()).format('L') );

		},

		filterReset: function( ) {
			this.set('editedDate', null );
			this.set('filteredSet', null);
		}
	}
});
 