import Ember from 'ember';

export default Ember.View.extend({
	templateName: 'd3-chart',

	data: [4, 8, 15, 16, 23, 42],

	chart : null,

	didInsertElement: function() {
			console.log( 'd3?' , d3.select("body") );
			this.set('chart', d3.select(this.$(".chart")[0]) );

			this.chartData();
		},

		chartData: function(){
			console.log('chart data');
			var chart = this.get('chart');
			var bar = chart.selectAll("div"); //"Data Join" -Think of the initial selection as declaring the elements you want to exist
			var barUpdate = bar.data( this.get('data') );  // Next we join the data

			var barEnter = barUpdate.enter().append("div"); // create divs for which there is data

			barEnter.style("width", function(data) { return data * 10 + "px"; });  // Now we set the width of each new bar as a multiple of the associated data value, d.

			barEnter.text(function(data) { return data; }); // Lastly, we use a function to set the text content of each bar, and produce a label.

			//var barOnUpdate = barUpdate.update();
			barUpdate.style("width", function(data) { return data * 10 + "px"; });


		}.observes('data'),

		actions: {
			changeData: function() {
				console.log('change data', this.get('data'));
				this.set('data', [14, 2, 26, 5, 60, 21] );
				console.log('after change data', this.get('data'));
			//	this.chartData();
			}
		}
});
