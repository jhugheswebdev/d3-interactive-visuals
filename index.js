var dataset = [ 5, 27, 25, 26, 21, 8, 24, 25, 19, 23, 23, 24, 26, 25, 24, 8, 23, 26];

    var width = 600;
    var height = 250;
    var barPadding = 1;
    // creates svg element
    var svg = d3.select("body").append("svg")
                .attr('width', width)
                .attr('height', height);

    var xScale = d3.scale.ordinal()
                  .domain(d3.range(dataset.length))
                  .rangeRoundBands([0, width], 0.05);

    // var yScale = d3.scale.linear()
    //                   .domain([0, d3.max(dataset, function(d) {return d[1];})])
    //                   .range([height - padding, padding]);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr({
          x: function(d, i) { return xScale(i); },
          y: function(d) { return height - (d * 4); },
          width: xScale.rangeBand(),
          height: function(d) { return d * 4; },
          fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")"}
        });

        
    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
          return d;
        })
        .attr({
          x: function(d, i) { return i * (width / dataset.length) + (width / dataset.length) / 2; },
          y: function(d) { return height - (d * 4) + 14; },
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white")
        .attr("text-anchor", "middle");



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

