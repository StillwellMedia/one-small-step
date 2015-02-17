import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	
	attributeBindings: ['href'],
  	
  	href: "#",

	classNameBindings: [':fa', 'toggleClass', 'isVisible'],

	isToggled: false,

	visible: false,

	from: 'fa-angle-right', // default Class

	to: 'fa-angle-down', // toggled Class

  	toggleClass: function() {
		
		if ( this.get('isToggled') ) {
  			return this.get('to');
  		} else {
  			return this.get('from');
  		}
  		
  	}.property('isToggled'),

  	isVisible: function(){
  		if ( this.get('visible') ) {
  			return '';
  		} else {
  			return 'invisible';
  		}

  	}.property('visible'),

  	click: function() {
  		this.set('isToggled', !this.get('isToggled') );
  		this.sendAction();
  		return false;
  	}
});
