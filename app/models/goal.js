import DS from 'ember-data';

// export default DS.Model.extend({
//   title: DS.attr('string')
// });

var Goal = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  steps: DS.hasMany('step') //, {async: true})
});

Goal.reopenClass({FIXTURES : [
	{ 	
		id : 1,
		title: 'Conquer the Dewey Decimal System',
		description : 'It\'s just so darn persnickety.'
	},
	{ 	
		id : 2,
		title: 'Learn Ember.js',
		description : 'No piece makes sense, without first understanding all the other pieces.'
	},
	{ 	
		id : 3,
		title: 'Make portfolio site',
		description : 'What do you call a Web Developer without a website?'
	}
]});

export default Goal;
