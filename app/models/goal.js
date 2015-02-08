import DS from 'ember-data';

// export default DS.Model.extend({
//   title: DS.attr('string')
// });

var Goal = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	steps: DS.hasMany('step'),// {async: true})
	createdAt: DS.attr('date', {
          defaultValue: function() { return new Date(); }
    }),
	lastEdited: DS.attr('date', {
          defaultValue: function() { return new Date(); }
    })
});

Goal.reopenClass({FIXTURES : [
	{ 	
		id : 1,
		title: 'Conquer the Dewey Decimal System',
		description : 'It\'s just so darn persnickety.',
		createdAt:'2015-01-20T15:04:01',
		lastEdited: '2015-02-01T12:54:01'
	},
	{ 	
		id : 2,
		title: 'Learn Ember.js',
		description : 'No piece makes sense, without first understanding all the other pieces.',
		createdAt: '2015-01-20T15:04:01',
		lastEdited: '2015-02-08T17:39:00'
	},
	{ 	
		id : 3,
		title: 'Make portfolio site',
		description : 'What do you call a Web Developer without a website?',
		createdAt: '2015-01-20T15:04:01',
		lastEdited: '2015-01-20T15:04:01'
	}
]});

export default Goal;
