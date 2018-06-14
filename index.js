// var dataset = [ 5, 7, 5, 26, 21, 8, 24, 25, 19, 23, 23, 4, 26, 25, 24, 8, 23, 26];

    // var width = 500;
    // var height = 100;
//     var barPadding = 1;
//     // creates svg element
//     var svg = d3.select("body").append("svg")
//                 .attr('width', width)
//                 .attr('height', height);

//     svg.selectAll("rect")
//         .data(dataset)
//         .enter()
//         .append("rect")
//         .attr({
//           x: function(d, i) { return i * (width / dataset.length); },
//           y: function(d) { return height - (d * 4); },
//           width: width / dataset.length - barPadding,
//           height: function(d) { return d * 4; },
//           fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")"}
//         });

//     svg.selectAll("text")
//         .data(dataset)
//         .enter()
//         .append("text")
//         .text(function(d) {
//           return d;
//         })
//         .attr({
//           x: function(d, i) { return i * (width / dataset.length) + (width / dataset.length) / 2; },
//           y: function(d) { return height - (d * 4) + 14; },
//         })
//         .attr("font-family", "sans-serif")
//         .attr("font-size", "11px")
//         .attr("fill", "white")
//         .attr("text-anchor", "middle");

// ==================================================================
// =============================== SCATTERPLOT ======================

var dataset = [
  [5,20], 
  [480,90], 
  [250,50],
  [100,33],
  [330,95],
  [410, 12], 
  [475, 44], 
  [25, 67], 
  [220, 99]
];

var width = 500;
var height = 300;

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

var padding = 20;

var xScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {return d[0];})])
    .range([padding, width - padding * 2]);

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {return d[1];})])
    .range([height - padding, padding]);

var rScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) { return d[1];})])
    .range([2, 5]);



svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return xScale (d[0]);})
    .attr("cy", function(d) { return yScale (d[1]);})
    .attr("r", function(d) {
      return rScale(d[1]);
    });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
      return d[0] + ", " + d[1];
    })
    .attr("x", function(d) {
      return xScale(d[0]);
    })
    .attr("y", function(d) {
      return yScale(d[1]);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "red");


var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom")
                  .ticks(5);
                  

svg.append("g")
    .attr("class", "axis")
    //moves x axis to bottom
    .attr("transform", "translate(0," + (height - padding) + ")")
    .call(xAxis);

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

