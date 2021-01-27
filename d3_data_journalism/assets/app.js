// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select(".scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area
var chartGroup = svg.append("g");

// Load data from data.csv
d3.csv(".assets/data.csv").then(function(journalismData) {

  // Print the Data
  console.log(journalismData);

    // parse data
    journalismData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcarelow = +data.healthcarelow;
      });
    
      // create scales
      var xPoverty = d3.scaleLinear()
        .domain(d3.extent(journalismData, d => d.poverty))
        .range([0, width]);
    
      var yhealthcareLow = d3.scaleLinear()
        .domain([0, d3.max(journalismData, d => d.healthcareLow)])
        .range([height, 0]);
    

   // create axes
   var xAxis = d3.axisBottom(xPoverty);
   var yAxis = d3.axisLeft(yhealthcareLow).ticks(51);
 
// append axes
chartGroup.append("g")
.attr("transform", `translate(0, ${height})`)
.call(xAxis);

chartGroup.append("g")
.call(yAxis);

// // line generator
// var line = d3.line()
// .x(d => xTimeScale(d.date))
// .y(d => yLinearScale(d.medals));

// // append line
// chartGroup.append("path")
// .data([medalData])
// .attr("d", line)
// .attr("fill", "none")
// .attr("stroke", "red");

// append circles
var circlesGroup = chartGroup.selectAll("circle")
.data(journalismData)
.enter()
.append("circle")
.attr("cx", d => xPoverty(d.date))
.attr("cy", d => yhealthcareLow(d.healthcareLow))
.attr("r", "10")
.attr("fill", "blue")
.attr("text", journalismData(d => d.abbr));
// .attr("stroke-width", "1")
// .attr("stroke", "black");

 

