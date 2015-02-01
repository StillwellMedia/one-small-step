import DS from 'ember-data';

// export default DS.Model.extend({
//   title: DS.attr('string')
// });

var Goal = DS.Model.extend({
  title: DS.attr('string')
});


Goal.reopenClass({FIXTURES : [
	{ 	
		id : 1,
		title: 'goal 1'
	},
	{ 	
		id : 2,
		title: 'goal 2'
	},
	{ 	
		id : 3,
		title: 'goal 3'
	}
]});

export default Goal;

