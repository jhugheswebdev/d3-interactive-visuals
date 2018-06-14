// // /Width and height
// 			var w = 600;
// 			var h = 250;
			
// 			var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
// 							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

// 			var xScale = d3.scale.ordinal()
// 							.domain(d3.range(dataset.length))
// 							.rangeRoundBands([0, w], 0.05);

// 			var yScale = d3.scale.linear()
// 							.domain([0, d3.max(dataset)])
// 							.range([0, h]);
			
// 			//Create SVG element
// 			var svg = d3.select("body")
// 						.append("svg")
// 						.attr("width", w)
// 						.attr("height", h);

// 			//Create bars
// 			svg.selectAll("rect")
// 			   .data(dataset)
// 			   .enter()
// 			   .append("rect")
// 			   .attr("x", function(d, i) {
// 			   		return xScale(i);
// 			   })
// 			   .attr("y", function(d) {
// 			   		return h - yScale(d);
// 			   })
// 			   .attr("width", xScale.rangeBand())
// 			   .attr("height", function(d) {
// 			   		return yScale(d);
// 			   })
// 			   .attr("fill", function(d) {
// 					return "rgb(0, 0, " + (d * 10) + ")";
// 			   });

// 			//Create labels
// 			svg.selectAll("text")
// 			   .data(dataset)
// 			   .enter()
// 			   .append("text")
// 			   .text(function(d) {
// 			   		return d;
// 			   })
// 			   .attr("text-anchor", "middle")
// 			   .attr("x", function(d, i) {
// 			   		return xScale(i) + xScale.rangeBand() / 2;
// 			   })
// 			   .attr("y", function(d) {
// 			   		return h - yScale(d) + 14;
// 			   })
// 			   .attr("font-family", "sans-serif")
// 			   .attr("font-size", "11px")
// 			   .attr("fill", "white");


// d3.select("p")
//          .on("click",function() {
//           // dataset = [ 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
//           //   5, 10, 13, 19, 21, 25, 22, 18, 15, 13 ];
//           var maxValue = 100;

//           var numValues = dataset.length;
//           dataset = [];
//           for (let i = 0; i < numValues; i++) {
//             var newNumber = Math.floor(Math.random() * maxValue);
//             dataset.push(newNumber);
//           }
          
//           yScale.domain([0, d3.max(dataset)]);

//           svg.selectAll("rect")
//             .data(dataset)
//             .transition()
//             .delay(function(d, i) {
//               return i / dataset.length * 1000;
//             })
//             .duration(500)
//             .ease("linear")
//             .attr("y", function(d) {
//                       return h - yScale(d);
//             })
//             .attr("height", function(d) {
//                       return yScale(d);
//             })
//             .attr("fill", function(d) {
//               return "rgb(0, 0, " + (d * 10) + ")";
//              });

//                 //Create labels
//           svg.selectAll("text")
//             .data(dataset)
//             .transition()
//             .delay(function(d, i) {
//               return i / dataset.length * 1000;
//              })
//             .duration(500)
//             .ease("linear")
//             .text(function(d) {
//                 return d;
//             })
//             .attr("x", function(d, i) {
//                 return xScale(i) + xScale.rangeBand() / 2;
//             })
//             .attr("y", function(d) {
//                 return h - yScale(d) + 14;
//             })
//             .attr("font-family", "sans-serif")
//             .attr("font-size", "11px")
//             .attr("fill", "white");
//               });


// ==================================================================
// =============================== SCATTERPLOT ======================

//Width and height
var w = 500;
var h = 300;
var padding = 30;

//Dynamic, random dataset
var dataset = [];											//Initialize empty array
var numDataPoints = 50;										//Number of dummy data points to create
var maxRange = Math.random() * 1000;						//Max range of new values
for (var i = 0; i < numDataPoints; i++) {					//Loop numDataPoints times
  var newNumber1 = Math.floor(Math.random() * maxRange);	//New random integer
  var newNumber2 = Math.floor(Math.random() * maxRange);	//New random integer
  dataset.push([newNumber1, newNumber2]);					//Add new number to array
}

//Create scale functions
var xScale = d3.scale.linear()
           .domain([0, d3.max(dataset, function(d) { return d[0]; })])
           .range([padding, w - padding * 2]);

var yScale = d3.scale.linear()
           .domain([0, d3.max(dataset, function(d) { return d[1]; })])
           .range([h - padding, padding]);

//Define X axis
var xAxis = d3.svg.axis()
          .scale(xScale)
          .orient("bottom")
          .ticks(5);

//Define Y axis
var yAxis = d3.svg.axis()
          .scale(yScale)
          .orient("left")
          .ticks(5);

//Create SVG element
var svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

//Create circles
svg.append("g")
    .attr("id", "circles")
    .attr("clip-path", "url(#chart-area)")
    .selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", function(d) {
       return xScale(d[0]);
   })
   .attr("cy", function(d) {
       return yScale(d[1]);
   })
   .attr("r", 2);

//Create X axis
svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .call(xAxis);

//Create Y axis
svg.append("g")
  .attr("class", "y axis")
  .attr("transform", "translate(" + padding + ",0)")
  .call(yAxis);



//On click, update with new data			
d3.select("p")
  .on("click", function() {

    //New values for dataset
    var numValues = dataset.length;						 		//Count original length of dataset
    var maxRange = Math.random() * 1000;						//Max range of new values
    dataset = [];  						 				 		//Initialize empty array
    for (var i = 0; i < numValues; i++) {				 		//Loop numValues times
      var newNumber1 = Math.floor(Math.random() * maxRange);	//New random integer
      var newNumber2 = Math.floor(Math.random() * maxRange);	//New random integer
      dataset.push([newNumber1, newNumber2]);					//Add new number to array
    }
    
    //Update scale domains
    xScale.domain([0, d3.max(dataset, function(d) { return d[0]; })]);
    yScale.domain([0, d3.max(dataset, function(d) { return d[1]; })]);

    //Update all circles
    svg.selectAll("circle")
       .data(dataset)
       .transition()
          .duration(1000)
       .each("start", function(d) {
         d3.select(this)
            .attr("fill", "magenta")
            .attr("r", 3);
       })
       .attr("cx", function(d) {
           return xScale(d[0]);
       })
       .attr("cy", function(d) {
           return yScale(d[1]);
       })
       .each("end", function(d) {
         d3.select(this)
            .attr("fill", "black")
            .attr("r", 2);
       });

      //Update X axis
    svg.select(".x.axis")
      .transition()
      .duration(1000)
            .call(xAxis);

    //Update Y axis
    svg.select(".y.axis")
        .transition()
        .duration(1000)
              .call(yAxis);

    svg.append("clipPath")
        .attr("id", "chart-area")
        .append("rect")
        .attr("x", padding)
        .attr("y", padding)
        .attr("width", w - padding * 3)
        .attr("height", h - padding * 2);

        
  });


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

