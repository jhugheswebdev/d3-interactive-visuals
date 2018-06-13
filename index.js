var dataset = [ 25, 7, 5, 26, 11, 8, 24, 35, 19, 93, 23, 4, 76, 65, 34, 8, 23, 76];

    var width = 500;
    var height = 100;
    var barPadding = 1;
    // creates svg element
    var svg = d3.select("body").append("svg")
                .attr('width', width)
                .attr('height', height);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr({
          x: function(d, i) { return i * (width / dataset.length); },
          y: function(d) { return height - (d * 4); },
          width: width / dataset.length - barPadding,
          height: function(d) { return d * 4; },
          fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")"}
        });