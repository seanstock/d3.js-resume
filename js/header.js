ndow,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
console.log(x);
var margin = {top: 20, right: 0, bottom: 0, left: 0},
    width = x - 360 - margin.left - margin.right,
    height = 110 - margin.top - margin.bottom;

var svg = d3.select("#resume").append("svg")
//    .attr("width", width + margin.left + margin.right)
    .attr("width", 1 * parseInt(d3.select('#con').style('width'), 0))
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("id", "viz");

d3.select("#resume").attr("align","center");

svg.append("text")
    .attr("y", 13)
    .attr("transform", "translate(" + 10  + "," + (20) +")")
    .style("fill", "#000")
    .style("font-size", 64)
    .text("Sean Cook")
    .attr("text-anchor", "left");
                
svg.append("text")
    .attr("y", 13)
    .attr("transform", "translate(" + 13  + "," + (60) +")")
    .style("fill", "#ff5c33")
    .style("font-size", 30)
    .text("Full Stack Data Analyst")
    .attr("text-anchor", "left");

svg.append("text")
    .attr("y", 5)
    .attr("x", "97%")
    .style("fill", "#000")
    .style("font-size", 20)
    .text("seangcook@gmail.com")
    .attr("text-anchor", "end");

svg.append("text")
    .attr("y", 40)
    .attr("x", "97%")
    .style("fill", "#000")
    .style("font-size", 20)
    .text("(858) 610 8633")
    .attr("text-anchor", "end");

svg.append("text")
    .attr("y", 75)
    .attr("x", "97%")
    .style("fill", "#0565E1")
    .style("font-size", 20)
    .text("LinkedIn")
    .attr("text-anchor", "end")
    .style("cursor", "pointer")
    .on("click", function() { window.open("https://www.linkedin.com/in/seangcook"); });

