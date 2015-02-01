import Ember from 'ember';
import Goal from "../../models/goals/goal";

export default Ember.Route.extend({
	model: function(params) {
	//	return this.store.find('goal', params.post_id);
		return { id : 1, title: 'goal 1'};
	}
});
 