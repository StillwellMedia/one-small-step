import Ember from 'ember';
//import moment from 'bower_components/moment/moment';

export default Ember.ObjectController.extend({
	queryParams: ['editedDate', 'isCompleted'], // ?query to url
	
	editedDate: null, // ? =param to url

	isCompleted: null,

	allExpanded: false,

	allCollapsed: true,

	// filters build upon each other
 	filteredGoals: function() {
 		var that = this;
 		var queryParams = this.get('queryParams');
	    var goals = this.get('goals');

	    var param;
	    var filterQuery;

	    queryParams.forEach(function(item, index, self) {
		  filterQuery = that.get(item) ;

		  //if a filter has been defined for this param
		  if ( filterQuery ){
		  	 
		  	// make sure booleans are not treated like strings
		  	if ( filterQuery === 'true'){
		  		filterQuery = true;
		  	} else if ( filterQuery === 'false') {
				filterQuery = false;
		  	}

		  	param = self[index];

		  	// Date filter
		  	if ( param === 'editedDate'){
			  	goals = goals.filter(function(goal) {
				     return moment(goal.get('lastEdited')).format('L') === that.get(item);
				});
		  	} else {
		  		// other more simple filters
	    		goals = goals.filterBy( param , filterQuery );
		  	}
		  }
		});

	    return goals;

    }.property('editedDate', 'isCompleted', 'model', 'goals.@each.isCompleted', 'goals.@each.editedDate'),

	anyFilters: function() {
        return this.get('editedDate') || this.get('isCompleted');

    }.property('editedDate', 'isCompleted'), 

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

    actions : {

		filterToday: function( ) {			
			this.set('editedDate', moment(new Date()).format('L') );
		},

		filterReset: function( ) {
			this.set('isCompleted', null);
			this.set('editedDate', null);
		},

		expandAll: function( ) {
			this.set('allExpanded', true);
			this.set('allCollapsed', false);
		},

		collapseAll: function( ) {
			this.set('allExpanded', false);
			this.set('allCollapsed', true);
			
		}
	}
});
 