import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	
	attributeBindings: ['href'], // An <a> without an href is invalid
  	
  href: "#",

	classNameBindings: [':fa', 'toggleClass', 'isVisible'],

	isToggled: false,

	visible: true,

	from: 'fa-angle-right', // default Class

	to: 'fa-angle-down', // toggled Class

  toggleClass: function() {
		// Toggle the button class name between the classes defined in from and to variables.

		if ( this.get('isToggled') ) {
       // If this is toggled to true, set the class to 'fa-angle-down', 
      // or whichever class is declared in that variable.
  			return this.get('to');
  		}
  		return this.get('from');
  		
  	}.property('isToggled'),

  	isVisible: function(){
      // Sometimes it's useful to let an element continue to take up space in the dom
  		if ( this.get('visible') ) {
  			return '';
  		}
  		return 'invisible';

  	}.property('visible'),

  	click: function( ) {
  		this.toggleProperty('isToggled'); // Toggles this variable between true and false

  		this.sendAction(); // Send a generic action that the parent can act upon

  		return false; // return false so that the page does not reload
  	}
});
