// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 960;

var margin = {
  top: 50,
  bottom: 50,
  right: 50,
  left: 50
};

var height = svgHeight - margin.top - margin.bottom;
var width = svgWidth - margin.left - margin.right;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area
var chartGroup = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data from data.csv
d3.csv("assets/data.csv").then(function(journalismData){
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
        .domain([0, d3.max(journalismData, d => d.healthcareLow)*1.2])
        .range([height, 0]);
    

   // create axes
   var xAxis = d3.axisBottom(xPoverty);
   var yAxis = d3.axisLeft(yhealthcareLow);


// append axes
chartGroup.append("g")
.attr("transform", `translate(0, ${height})`)
.call(xAxis);

chartGroup.append("g")
.call(yAxis);

// append circles
var circlesGroup = chartGroup.selectAll("circle")
.data(journalismData)
.enter()
.append("circle")
.attr("cx", d => xPoverty(d.poverty))
.attr("cy", d => yhealthcareLow(d.healthcareLow))
.attr("r", "10")
.attr("fill", "blue")
//.attr("text", journalismData(d => d.abbr))
.attr("fill", "lightblue")
.attr("stroke", "black");

var textGroup = chartGroup.selectAll("text.abbr")
.data(journalismData)
.enter()
.append("text")
.attr("class", "abbr")
.text(d=> d.abbr)
.attr("dx", d => xPoverty(d.poverty))
.attr("dy", d => yhealthcareLow(d.healthcareLow))
.style("text-anchor", "middle")
.style("font-size", "10px");

  var toolTip = d3.tip()
    .attr("class","tooltip")
    .html( function(d){
      return (`<strong>Poverty: ${d.poverty}<strong><hr>${d.state}:<hr><strong>Income: ${d.income}<strong>`);
    })

    circlesGroup.call(toolTip)

  // Step 2: Create "mouseover" event listener to display tooltip
  circlesGroup.on("mouseover", function(data) {
    toolTip.show(data, this);
  })
  // Step 3: Create "mouseout" event listener to hide tooltip
  .on("mouseout", function(data) {
    toolTip.hide(data);
  });


})

 

