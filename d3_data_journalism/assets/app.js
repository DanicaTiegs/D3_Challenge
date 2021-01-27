//CODE HERE

// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area
var chartGroup = svg.append("g");

// Load data from hours-of-tv-watched.csv
d3.csv("./data.csv").then(function(FUNCTIONNname) {

  // Print the tvData
  // What type of data structure is tvData?
  console.log(journalismData);

//   const bubble = svg.append("g")
//   .attr("stroke-width", 1)
// .selectAll("circle")
// .data(nodes)
// .join("circle")
//   .attr("opacity", 0.75)
//   .attr("cx", d => x(d.birthRate))
//   .attr("cy", d => y(d.deathRate))
//   .attr("r",  d => r(d.population))
//   .attr("stroke", d => color(d.population))
//   .attr("fill",   d => color(d.population))
// bubble.append("title")
//   .text(tooltip)

// //Create the ISO country codes as text elements
// const label = svg.append("g")
//   .attr("font-family", "Yanone Kaffeesatz")
//   .attr("font-weight", 700)
//   .attr("text-anchor", "middle")
// .selectAll("text")
// .data(data)
// .join("text")
//   .attr("id", "isoCode")
//   .attr("opacity", 0)
//   .attr("dy", "0.35em")
//   .attr("x", d => d.x0)
//   .attr("y", d => d.y0)
//   .attr("font-size", d => r(d.population)*1.5)
//   .attr("fill", d => color(d.population))
//   .text(d => d.code);
// //add a title to act as a mousover tooltip, function tooltip() defined in a cell bleow
// label.append("title")
//   .text(tooltip);

// const legend1 = svg.append("g")
//  .attr("transform", `translate(${width - 340} ${height - 90})`)
//  .append(() => legend({
//     color: color, // <= this is the scale "color" being passed into field "color"
//     title: "Population (in millions)",
//     ticks: 4,
//     tickFormat: d => d3.format(",.0f")(d / 1000000)
//   }))
