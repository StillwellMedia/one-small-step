import DS from 'ember-data';

// export default DS.Model.extend({
//   title: DS.attr('string')
// });

var Goal = DS.Model.extend({
  title: DS.attr('string'),
  steps: DS.hasMany('step') //, {async: true})
});

Goal.reopenClass({FIXTURES : [
	{ 	
		id : 1,
		title: 'Conquer the Dewey Decimal System'
	},
	{ 	
		id : 2,
		title: 'Learn Ember.js'
	},
	{ 	
		id : 3,
		title: 'Make portfolio site'
	}
]});

export default Goal;
