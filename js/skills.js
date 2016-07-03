var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var header_color = "#ff5c33"

var svg_s = d3.select("#skills").append("svg")
    .attr("width",  1 * parseInt(d3.select('#skills').style('width'), 10))
    .attr("height", .6 * parseInt(d3.select('#skills').style('height'), 10))
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("id", "bar");


svg_s.append("text")
    .style("cursor", "pointer")
    .attr("transform", "translate(" + 5 + "," + (30) +")")
    .style("fill", header_color)
    .style("font-size", 24)
    .text("Tech Skills")
    .attr("id", "skills_label")
    .attr("text-anchor", "left")
    .on("click", function() {
    });

var svg_s2 = d3.select("#skills").append("svg")
    .attr("width",  1 * parseInt(d3.select('#skills').style('width'), 10))
    .attr("height", .3 * parseInt(d3.select('#skills').style('height'), 10))
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("id", "bar");

svg_s2.append("text")
    .style("cursor", "pointer")
    .attr("transform", "translate(" + 5 + "," + (30) +")")
    .style("fill", header_color)
    .style("font-size", 24)
    .text("Soft Skills")
    .attr("id", "skills_label")
    .attr("text-anchor", "left")
    .on("click", function() {
    });

var width = (.8 * parseInt(d3.select('#skills').style('width'), 10)),
    barHeight = 30;

var x = d3.scale.linear()
    .range([0, width-5]);

//Tech Skills Bars
d3.csv("data/tech_skills.csv", type, function(error, data) {
  x.domain([0, d3.max(data, function(d) { return d.Value; })]);
  console.log(data);

  var bar = svg_s.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(10," + (50 + (i * barHeight)) + ")"; });

  bar.append("rect")
      .attr("rx",3)
      .attr("fill-opacity",0.7)
      .attr("width", function(d) { return x(d.Value); })
      .attr("height", barHeight - 1);

  bar.append("text")
      .attr("fill", "black")
      .attr("x", 10)
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.Skill; });

});


//Soft Skills Bars
d3.csv("data/soft_skills.csv", softtype, function(error, softdata) {
  x.domain([0, d3.max(softdata, function(d) { return d.softValue; })]);
  console.log(softdata);

  var bar2 = svg_s2.selectAll("g")
      .data(softdata)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(10," + (50 + (i * barHeight)) + ")"; });

  bar2.append("rect")
      .attr("rx",3)
      .attr("fill-opacity",0.7)
      .attr("width", function(d) { return x(d.softValue); })
      .attr("height", barHeight - 1);

  bar2.append("text")
      .attr("fill", "black")
      .attr("x", 10)
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.softSkill; });

});


function type(d) {
  d.Value = +d.Value; // coerce to number
  return d;
}

function softtype(d) {
  d.softValue = +d.softValue; // coerce to number
  return d;
}

