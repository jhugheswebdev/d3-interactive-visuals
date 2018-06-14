



//Width and height
			var w = 600;
			var h = 250;
			
// 			var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
// 							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var dataset = [ { key: 0, value: 5 },		//dataset is now an array of objects.
  { key: 1, value: 10 },		//Each object has a 'key' and a 'value'.
  { key: 2, value: 13 },
  { key: 3, value: 19 },
  { key: 4, value: 21 },
  { key: 5, value: 25 },
  { key: 6, value: 22 },
  { key: 7, value: 18 },
  { key: 8, value: 15 },
  { key: 9, value: 13 },
  { key: 10, value: 11 },
  { key: 11, value: 12 },
  { key: 12, value: 15 },
  { key: 13, value: 20 },
  { key: 14, value: 18 },
  { key: 15, value: 17 },
  { key: 16, value: 16 },
  { key: 17, value: 18 },
  { key: 18, value: 23 },
  { key: 19, value: 25 } ];

			var xScale = d3.scale.ordinal()
							.domain(d3.range(dataset.length))
							.rangeRoundBands([0, w], 0.05);

			var yScale = d3.scale.linear()
							.domain([0, d3.max(dataset, function(d) {
                return d.value;
              })])
							.range([0, h]);
			
			//Create SVG element
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);


      var key = function(d) {
        return d.key;
      };

			//Create bars
			svg.selectAll("rect")
			   .data(dataset, key)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return xScale(i);
			   })
			   .attr("y", function(d) {
			   		return h - yScale(d.value);
			   })
			   .attr("width", xScale.rangeBand())
			   .attr("height", function(d) {
			   		return yScale(d.value);
			   })
			   .attr("fill", function(d) {
					return "rgb(0, 0, " + (d.value * 10) + ")";
			   });

			//Create labels
			svg.selectAll("text")
			   .data(dataset, key)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d.value;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return xScale(i) + xScale.rangeBand() / 2;
			   })
			   .attr("y", function(d) {
			   		return h - yScale(d.value) + 14;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "white");




			//On click, update with new data			
			d3.selectAll("p")
				.on("click", function() {
          // see which p was clicked
          var paragraphID = d3.select(this).attr("id");

          if(paragraphID == "add") {
            var maxValue = 25;
            var newNumber = Math.floor(Math.random() * maxValue);	//New random integer (0-24)
            var lastKeyValue = dataset[dataset.length - 1].key;
            console.log(lastKeyValue);
            dataset.push({
              key: lastKeyValue + 1,
              value: newNumber
            });
          } else {
            	//Add one new value to dataset
					  dataset.shift();			 			 
          }
						//Add new number to array
					
					//Update scale domains
					xScale.domain(d3.range(dataset.length));	//Recalibrate the x scale domain, given the new length of dataset
					yScale.domain([0, d3.max(dataset, function(d) {
            return d.value;
          })]);		//Recalibrate the y scale domain, given the new max value in dataset

					//Select…
					var bars = svg.selectAll("rect")			//Select all bars
						.data(dataset, key);							//Re-bind data to existing bars, return the 'update' selection
																//'bars' is now the update selection
					
					//Enter…
					// bars.enter()								//References the enter selection (a subset of the update selection)
					// 	.append("rect")							//Creates a new rect
					// 	.attr("x", w)							//Sets the initial x position of the rect beyond the far right edge of the SVG
					// 	.attr("y", function(d) {				//Sets the y value, based on the updated yScale
					// 		return h - yScale(d);
					// 	})
					// 	.attr("width", xScale.rangeBand())		//Sets the width value, based on the updated xScale
					// 	.attr("height", function(d) {			//Sets the height value, based on the updated yScale
					// 		return yScale(d);
					// 	})
					// 	.attr("fill", function(d) {				//Sets the fill value
					// 		return "rgb(0, 0, " + (d * 10) + ")";
          // 	});
          
          //EXIT
          bars.exit()
              .transition()
              .duration(500)
              .attr("x", -xScale.rangeBand())
              .remove();

					//Update…
					bars.transition()							//Initiate a transition on all elements in the update selection (all rects)
						.duration(500)
						.attr("x", function(d, i) {				//Set new x position, based on the updated xScale
							return xScale(i);
						})
						.attr("y", function(d) {				//Set new y position, based on the updated yScale
							return h - yScale(d.value);
						})
						.attr("width", xScale.rangeBand())		//Set new width value, based on the updated xScale
						.attr("height", function(d) {			//Set new height value, based on the updated yScale
							return yScale(d.value);
						});



					//Update all labels
					//
					//Exercise: Modify this code to add a new label each time a new bar is added!
					//
					svg.selectAll("text")
					   .data(dataset, key)
					   .transition()
					   .duration(500)
					   .text(function(d) {
					   		return d.value;
					   })
					   .attr("x", function(d, i) {
							return xScale(i) + xScale.rangeBand() / 2;
					   })
					   .attr("y", function(d) {
							return h - yScale(d.value) + 14;
					   });

				});



// ==================================================================
// =============================== SCATTERPLOT ======================

// //Width and height
// var w = 500;
// var h = 300;
// var padding = 30;

// //Dynamic, random dataset
// var dataset = [];											//Initialize empty array
// var numDataPoints = 50;										//Number of dummy data points to create
// var maxRange = Math.random() * 1000;						//Max range of new values
// for (var i = 0; i < numDataPoints; i++) {					//Loop numDataPoints times
//   var newNumber1 = Math.floor(Math.random() * maxRange);	//New random integer
//   var newNumber2 = Math.floor(Math.random() * maxRange);	//New random integer
//   dataset.push([newNumber1, newNumber2]);					//Add new number to array
// }

// //Create scale functions
// var xScale = d3.scale.linear()
//            .domain([0, d3.max(dataset, function(d) { return d[0]; })])
//            .range([padding, w - padding * 2]);

// var yScale = d3.scale.linear()
//            .domain([0, d3.max(dataset, function(d) { return d[1]; })])
//            .range([h - padding, padding]);

// //Define X axis
// var xAxis = d3.svg.axis()
//           .scale(xScale)
//           .orient("bottom")
//           .ticks(5);

// //Define Y axis
// var yAxis = d3.svg.axis()
//           .scale(yScale)
//           .orient("left")
//           .ticks(5);

// //Create SVG element
// var svg = d3.select("body")
//       .append("svg")
//       .attr("width", w)
//       .attr("height", h);

// //Create circles
// svg.append("g")
//     .attr("id", "circles")
//     .attr("clip-path", "url(#chart-area)")
//     .selectAll("circle")
//    .data(dataset)
//    .enter()
//    .append("circle")
//    .attr("cx", function(d) {
//        return xScale(d[0]);
//    })
//    .attr("cy", function(d) {
//        return yScale(d[1]);
//    })
//    .attr("r", 2);

// //Create X axis
// svg.append("g")
//   .attr("class", "x axis")
//   .attr("transform", "translate(0," + (h - padding) + ")")
//   .call(xAxis);

// //Create Y axis
// svg.append("g")
//   .attr("class", "y axis")
//   .attr("transform", "translate(" + padding + ",0)")
//   .call(yAxis);



// //On click, update with new data			
// d3.select("p")
//   .on("click", function() {

//     //New values for dataset
//     var numValues = dataset.length;						 		//Count original length of dataset
//     var maxRange = Math.random() * 1000;						//Max range of new values
//     dataset = [];  						 				 		//Initialize empty array
//     for (var i = 0; i < numValues; i++) {				 		//Loop numValues times
//       var newNumber1 = Math.floor(Math.random() * maxRange);	//New random integer
//       var newNumber2 = Math.floor(Math.random() * maxRange);	//New random integer
//       dataset.push([newNumber1, newNumber2]);					//Add new number to array
//     }
    
//     //Update scale domains
//     xScale.domain([0, d3.max(dataset, function(d) { return d[0]; })]);
//     yScale.domain([0, d3.max(dataset, function(d) { return d[1]; })]);

//     //Update all circles
//     svg.selectAll("circle")
//        .data(dataset)
//        .transition()
//           .duration(1000)
//        .each("start", function(d) {
//          d3.select(this)
//             .attr("fill", "magenta")
//             .attr("r", 3);
//        })
//        .attr("cx", function(d) {
//            return xScale(d[0]);
//        })
//        .attr("cy", function(d) {
//            return yScale(d[1]);
//        })
//        .each("end", function(d) {
//          d3.select(this)
//             .attr("fill", "black")
//             .attr("r", 2);
//        });

//       //Update X axis
//     svg.select(".x.axis")
//       .transition()
//       .duration(1000)
//             .call(xAxis);

//     //Update Y axis
//     svg.select(".y.axis")
//         .transition()
//         .duration(1000)
//               .call(yAxis);

//     svg.append("clipPath")
//         .attr("id", "chart-area")
//         .append("rect")
//         .attr("x", padding)
//         .attr("y", padding)
//         .attr("width", w - padding * 3)
//         .attr("height", h - padding * 2);

        
//   });


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

