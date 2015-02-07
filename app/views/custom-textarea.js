import Ember from 'ember';

export default Ember.TextArea.extend({
	hasText: function() {
   
    return this.get('value').length > 0;
  }.property('value')
  
});
