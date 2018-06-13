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
        .attr("x", function(d, i) {
          return i * (width / dataset.length);
        })
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", 100);