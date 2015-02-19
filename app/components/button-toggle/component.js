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
  		}
  		return this.get('from');
  		
  	}.property('isToggled'),

  	isVisible: function(){
  		if ( this.get('visible') ) {
  			return '';
  		}
  		return 'invisible';

  	}.property('visible'),

  	click: function() {
  		this.toggleProperty('isToggled');
  		this.sendAction();
  		return false;
  	}
});
