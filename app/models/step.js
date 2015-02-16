import DS from 'ember-data';

var Step = DS.Model.extend({
  goal: DS.belongsTo('goal'),
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean', { defaultValue: false })
});


Step.reopenClass({FIXTURES : [
	{ 	
		id : 1,
		goal: 1,
		title: 'Learn Dewey Decimal System',
		isCompleted: true
	},
	{ 	
		id : 2,
		goal: 1,
		title: 'Organize Card Catalog',
		isCompleted: false
	},
	{ 	
		id : 3,
		goal: 2,
		title: 'Stare blankly at Ember.js Guide',
		isCompleted: false
	},
	{ 	
		id : 4,
		goal: 2,
		title: 'Pull hair out for 2 hours (Remember to set quantifiable steps!)',
		isCompleted: false
	},
		{ 	
		id : 5,
		goal: 2,
		title: 'Add to Ember Guides on Github and submit pull request.',
		isCompleted: false
	},
	{ 	
		id : 6,
		goal: 3,
		title: 'Chart it up!',
		isCompleted: false
	}
]});

export default Step;
