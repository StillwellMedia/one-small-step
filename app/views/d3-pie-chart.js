import d3View from './d3-base';

export default d3View.extend({
	classNames: ['d3-pie-chart'],

	draw: function() {

		var svg = this.get('chart');
		var tspanWidth = this.get('chartHeight') / 4;
		var x = d3.scale.ordinal().rangeRoundBands([0, tspanWidth], 0.1, 0.3);
		var dataset = this.get('data');
		var outerRadius = this.get('chartHeight') /2.2;
		var innerRadius = this.get('chartHeight') / 6;
		var color = d3.scale.category20();
		var pie = d3.layout.pie().value(function(d){
			
		  return ( d.get('percentComplete') === 0 ) ? 1 : d.get('percentComplete');
		});
		
        //GROUP FOR ARCS/PATHS
		var arc_group;

		//If arc group does not exist, create it, otherwise select existing one
		if ( svg.select('.arc')[0][0] === null ){
			arc_group = svg.append("svg:g")
		  		.attr("class", "arc")
		  		.attr("transform", "translate(" + (this.get('chartWidth')/2) + "," + (this.get('chartHeight')/2) + ")");

		} else {
			arc_group = svg.select('.arc');
		}

		var arc = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

		var arcsUpdate = arc_group.selectAll("g")
	        .data(pie(dataset));

	    var arcsEnter = arcsUpdate.enter().append("g");
	    
	    var arcsExit = arcsUpdate.exit();


	    // On Enter / Create
	    arcsEnter.append("path");
	    arcsEnter.append("text");

	    // On Exit / Delete
	    arcsExit.remove();

		//On Update
		arcsUpdate.select("path")
		    .attr("fill", function(d, i) {
		        return color(i);
		    })
		    .attr("d", arc)
		    .attr("stroke", "#FFFFFF")
		    .attr("stroke-width", 2);

		arcsUpdate.select("text")
		    .attr("transform", function(d) {
		        return "translate(" + arc.centroid(d) + ")";
		    })
		    .attr("text-anchor", "middle")
		    .text(function(d) {
		        return d.data.get('title');
		    }).call(this.wrap, x.rangeBand());

	}

});
