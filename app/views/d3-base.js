import Ember from 'ember';

export default Ember.View.extend({
	classNames: ['d3-chart'],

	chart: null,

	chartWidth: 300,

	chartHeight: 300,

	data: function(){
		return this.get('content.[]').toArray();

	}.property('content.[]'),

	didInsertElement: function() {
		var svg = d3.select(this.$()[0]).append("svg:svg")
		   .attr("width", this.get('chartWidth'))
		   .attr("height", this.get('chartHeight'));

		this.set('chart', svg );
		this.draw();
	},

	onDataChange: function() {
		this.draw();

	}.observes('data'),

	draw: function() {
		// Placeholder function to be used in sub-classes.
		// Absolutely NO setting of data in the draw frunction.
		//console.log('draw: extend me');
	},
	//
	// TODO: make this work in more than 1 case
	//
	// Taken from http://bl.ocks.org/mbostock/7555321
	//
	// https://github.com/mbostock/d3/issues/1642
	//
	//	var tspanWidth = this.get('chartHeight') / 4;
	//	var x = d3.scale.ordinal().rangeRoundBands([0, tspanWidth], 0.1, 0.3);
	//  .call(this.wrap, x.rangeBand());
	wrap: function( text, width ){
		//.log('wrapwrapwrapwrapwrap', arguments);

		text.each(function() {
		    var text = d3.select(this),
		        words = text.text().split(/\s+/).reverse(),
		        word,
		        line = [],
		        y = text.attr("y");
		     var dy = parseFloat(text.attr("dy")) || 1,
		        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
		    while (word = words.pop()) {
		      line.push(word);
		      tspan.text(line.join(" "));
		      if (tspan.node().getComputedTextLength() > width) {
		        line.pop();
		        tspan.text(line.join(" "));
		        line = [word];
		        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + 0.1 + "em").text(word);
		      }
		    }
		});
	}
});
