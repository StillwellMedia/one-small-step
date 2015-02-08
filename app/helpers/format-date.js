import Ember from "ember";

 // http://momentjs.com/
export default Ember.Handlebars.makeBoundHelper(function(value, format) {
	var formatStr = typeof format === 'string' ? format : 'L';

	return moment(value).format(formatStr);
});
