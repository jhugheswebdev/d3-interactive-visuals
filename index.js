var dataset = [ 5, 7, 5, 26, 21, 8, 24, 25, 19, 23, 23, 4, 26, 25, 24, 8, 23, 26];

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