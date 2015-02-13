import DS from 'ember-data';

// export default DS.Model.extend({
//   title: DS.attr('string')
// });

var Goal = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	percentComplete: DS.attr('number', {
          defaultValue: function() { return 0; }
    }),
	steps: DS.hasMany('step'),// {async: true})
	createdAt: DS.attr('date', {
          defaultValue: function() { return new Date(); }
    }),
	lastEdited: DS.attr('date', {
          defaultValue: function() { return new Date(); }
    }),
    isCompleted: DS.attr('boolean')
});

Goal.reopenClass({FIXTURES : [
	{ 	
		id : 1,
		title: 'Conquer the Dewey Decimal System',
		description : 'It\'s just so darn persnickety.',
		createdAt:'2015-01-20T15:04:01',
		lastEdited: '2015-02-01T12:54:01',
		percentComplete: 0,
		isCompleted: false
	},
	{ 	
		id : 2,
		title: 'Learn Ember.js',
		description : 'No piece makes sense, without first understanding all the other pieces.',
		createdAt: '2015-01-20T15:04:01',
		lastEdited: '2015-02-09T17:39:00',
		percentComplete: 0,
		isCompleted: false
	},
	{ 	
		id : 3,
		title: 'Learn D3 js',
		description : 'What do you call a Web Developer without a website?',
		createdAt: '2015-01-20T15:04:01',
		lastEdited: '2015-01-20T15:04:01',
		percentComplete: 0,
		isCompleted: false
	}
]});

export default Goal;
