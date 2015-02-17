// example : http://bl.ocks.org/mbostock/4063570
// https://github.com/mbostock/d3/wiki/Cluster-Layout
// Cluster Dendrogram

import d3View from './d3-base';

export default d3View.extend({
	
	chartWidth: '100%',

	offsetLeft: function(){
		return parseInt( this.get('chartWidth') * 0.2);
	}.property('chartWidth'),

	offsetRight: function(){
		return parseInt( this.get('chartWidth') * 0.3);
	}.property('chartWidth'),

	data: function(){
		var data;
		var children = [];

		this.get('steps').forEach( function(item) {
			children.push({ 'name' : item.get('title') });
		});

		data = { 
			"name" : this.get('title'),
			"children": children
		};

		
		/* data format
		{
		"name": "My Goal",
		 "children": 
		 	[
		  		{ "name": "step 1" },
		  		{ "name": "step 2 },
		  		{ "name": "step 3" }
		  	]
		}
		*/

		return data;

	}.property('content.[]'),

	steps: function(){
		return this.get('content').get('steps').toArray();
	}.property('content.[]'),

	title: function(){
		return this.get('content').get('title');

	}.property('content.[]'),

	didInsertElement: function() {
		this.set('chartWidth', parseInt( this.$().width()) );
		$(window).bind('resize', $.proxy( this.resizeHandler, this ) );
		this._super();
	},

	draw: function() {
		// vars 
	 	var height = this.get('chartHeight');
		var width = this.get('chartWidth'); //parseInt( this.$().width() ); //get('chartWidth');
		var offsetLeft = this.get('offsetLeft');
		var offsetRight = this.get('offsetRight');
	//	var x = d3.scale.ordinal().rangeRoundBands([0, offsetRight/3], 0.1, 0.3);

	 	//	canvas
	 	var svg = this.get('chart').append("g")
    		.attr("transform", "translate("+(offsetLeft+40)+",0)"); //moves <g> to right

		//d3 functions
		var cluster = d3.layout.cluster()
						// .size(['50px', '50px']);
						.size([height, width - offsetRight - offsetLeft ]); // offsetRight  - offset for text labels

		var diagonal = d3.svg.diagonal()
    					.projection(function(d) {
    						return [d.y, d.x]; 
    					});


		var nodes = cluster.nodes( this.get('data') ); //,
	    var links = cluster.links(nodes);


		var link = svg.selectAll(".link")
		      .data(links)
		    .enter().append("path")
		      .attr("class", "link")
		      .attr("d", diagonal);


		var node = svg.selectAll(".node")
		      .data(nodes)
		    .enter().append("g")
		      .attr("class", "node")
		      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

		node.append("circle")
		      .attr("r", 4.5);

		node.append("text")
		      .attr("dx", function(d) { return d.children ? -8 : 8; })
		      .attr("dy", 3)
		      .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
		      .text(function(d) { return d.name; });
		      // .call(this.textEdit);
		  //    .call(this.wrap, x.rangeBand());

		  //    d3.select(self.frameElement).style("height", height + "px");

	},
	
	textEdit: function( text ){
		var offsetWidth = 100;

		text.each(function() {
			var text = d3.select(this);	
			console.log('textEdit', text.text());
			console.log('textEdit', text);

			console.log('textEdit', this );

			console.log(this.getBBox().width, offsetWidth );

			if ( this.getBBox().width > offsetWidth ) {

				console.log('text is bigger than offset width');
			}
		});
	},

	reset: function(){
		this.set('chartWidth', parseInt( this.$().width()) );
		this.get('chart').selectAll('*').remove();
        this.draw();

	}.observes('content.[]', 'offsetRight', 'offsetLeft'),

	resizeHandler: function() {
		this.reset();
    },

	willDestroy: function() {
		$(window).unbind('resize', $.proxy( this.resizeHandler, this ) );
    }
});
