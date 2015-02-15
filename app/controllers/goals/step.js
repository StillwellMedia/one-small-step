import Ember from 'ember';

export default Ember.ObjectController.extend({
	isCompleted: function(key, value){
		var model = this.get('model');
		var goal = model.get('goal');

	    if (value === undefined) {
	      // property being used as a getter
	      return model.get('isCompleted');
	    } else {
	      // property being used as a setter
	      if (!value){
	      	goal.set('isCompleted', false);
	      }
	      goal.set('lastEdited', new Date());
	      model.set('isCompleted', value);
	      model.save();
	      goal.save();
	      return value;
	  	}

	}.property('isCompleted')
});
