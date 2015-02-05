import Ember from 'ember';

export default Ember.Component.extend({
	type: '',
	buttonText: 'My Button',
	click: function(e){
		e.preventDefault();
		this.set('buttonText', 'new text!');

	}
});
