import DS from 'ember-data';

var Step = DS.Model.extend({
  goal: DS.belongsTo('goal'),
  title: DS.attr('string')
});


Step.reopenClass({FIXTURES : [
	{ 	
		id : 1,
		goal: 1,
		title: 'Learn Dewey Decimal System'
	},
	{ 	
		id : 2,
		goal: 1,
		title: 'Organize Card Catalog'
	},
	{ 	
		id : 3,
		goal: 2,
		title: 'Stare blankly at Ember.js Guide'
	},
	{ 	
		id : 4,
		goal: 3,
		title: 'Buy Domain'
	}
]});

export default Step;
