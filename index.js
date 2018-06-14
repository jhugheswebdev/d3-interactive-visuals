// /Width and height
			var w = 600;
			var h = 250;
			
			var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

			var xScale = d3.scale.ordinal()
							.domain(d3.range(dataset.length))
							.rangeRoundBands([0, w], 0.05);

			var yScale = d3.scale.linear()
							.domain([0, d3.max(dataset)])
							.range([0, h]);
			
			//Create SVG element
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			//Create bars
			svg.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return xScale(i);
			   })
			   .attr("y", function(d) {
			   		return h - yScale(d);
			   })
			   .attr("width", xScale.rangeBand())
			   .attr("height", function(d) {
			   		return yScale(d);
			   })
			   .attr("fill", function(d) {
					return "rgb(0, 0, " + (d * 10) + ")";
			   });

			//Create labels
			svg.selectAll("text")
			   .data(dataset)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return xScale(i) + xScale.rangeBand() / 2;
			   })
			   .attr("y", function(d) {
			   		return h - yScale(d) + 14;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "white");


d3.select("p")
         .on("click",function() {
          dataset = [ 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
            5, 10, 13, 19, 21, 25, 22, 18, 15, 13 ];
          
          svg.selectAll("rect")
            .data(dataset)
            .attr("y", function(d) {
                      return h - yScale(d);
            })
            .attr("height", function(d) {
                      return yScale(d);
            })
            .attr("fill", function(d) {
              return "rgb(0, 0, " + (d * 10) + ")";
             });

                //Create labels
          svg.selectAll("text")
            .data(dataset)
            .text(function(d) {
                return d;
            })
            .attr("x", function(d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
            })
            .attr("y", function(d) {
                return h - yScale(d) + 14;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white");
              });


// ==================================================================
// =============================== SCATTERPLOT ======================

// var dataset = [
//   [5,20], 
//   [480,90], 
//   [250,50],
//   [100,33],
//   [330,95],
//   [410, 12], 
//   [475, 44], 
//   [25, 67], 
//   [220, 99]
// ];

// var dataset = [];
// var numDataPoints = 50;
// var xRange = Math.random() * 1000;
// var yRange = Math.random() * 1000;
// for (let i = 0; i < numDataPoints; i++) {
//   var newNumber1 = Math.floor(Math.random() * xRange);
//   var newNumber2 = Math.floor(Math.random() * yRange);
//   dataset.push([newNumber1, newNumber2])
// }

// var width = 500;
// var height = 300;

// var svg = d3.select("body")
//             .append("svg")
//             .attr("width", width)
//             .attr("height", height);

// var padding = 30;

// var xScale = d3.scale.linear()
//     .domain([0, d3.max(dataset, function(d) {return d[0];})])
//     .range([padding, width - padding * 2]);

// var yScale = d3.scale.linear()
//     .domain([0, d3.max(dataset, function(d) {return d[1];})])
//     .range([height - padding, padding]);

// var rScale = d3.scale.linear()
//     .domain([0, d3.max(dataset, function(d) { return d[1];})])
//     .range([2, 5]);

// var formatAsPercentage = d3.format(".1%");


// svg.selectAll("circle")
//     .data(dataset)
//     .enter()
//     .append("circle")
//     .attr("cx", function(d) { return xScale (d[0]);})
//     .attr("cy", function(d) { return yScale (d[1]);})
//     .attr("r", function(d) {
//       return rScale(d[1]);
//     });

// // svg.selectAll("text")
// //     .data(dataset)
// //     .enter()
// //     .append("text")
// //     .text(function(d) {
// //       return d[0] + ", " + d[1];
// //     })
// //     .attr("x", function(d) {
// //       return xScale(d[0]);
// //     })
// //     .attr("y", function(d) {
// //       return yScale(d[1]);
// //     })
// //     .attr("font-family", "sans-serif")
// //     .attr("font-size", "11px")
// //     .attr("fill", "red");


// var xAxis = d3.svg.axis()
//                   .scale(xScale)
//                   .orient("bottom")
//                   .ticks(5);
                  

// svg.append("g")
//     .attr("class", "axis")
//     //moves x axis to bottom
//     .attr("transform", "translate(0," + (height - padding) + ")")
//     .call(xAxis);

// xAxis.tickFormat(formatAsPercentage);

// var yAxis = d3.svg.axis()
//                   .scale(yScale)
//                   .orient("left")
//                   .ticks(5);

// svg.append("g")
//     .attr("class", "axis")
//     .attr("transform", "translate(" + padding + ", 0)")
//     .call(yAxis);

// ==============================================
// SCALES



// var dataset = [
//     [5,20], 
//     [480,90], 
//     [250,50],
//     [100,33],
//     [330,95],
//     [410, 12], 
//     [475, 44], 
//     [25, 67], 
//     [220, 99]
//   ];

