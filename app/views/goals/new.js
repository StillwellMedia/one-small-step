import Ember from 'ember';

export default Ember.View.extend({
	fields : function () {

		// After new inputs have been added, give focus to 
		//the first in the DOM that has no text

		Ember.run.scheduleOnce('afterRender', this, function(){ 
			var $fields = this.$('.stepInput');

			$fields.each(function(){
				if ( $(this).val() === "" ) {
					$(this).focus();
					return false;
				}
			});
		});

	}.observes('controller.stepFields.[]')

});
