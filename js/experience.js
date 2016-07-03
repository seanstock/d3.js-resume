ndow,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var header_color = "#ff5c33"
var link_color   = "#0565E1"

var intuit = "Senior Data Analyst<br>October 2014 - Present<br><br>"+
"Worked across teams to bring a customer-centric yet deeply analytical approach to business decisions, focused on finding areas where improving the user experience drives growth.<br>" +
"<ul><li>Lead analyst for in-product Net Promoter Score. Designed reporting and custom analytics linking satisfaction to in-product behavior, LTV, firmagraphics, retention and acquisition. Worked across multiple teams and departments to bring a customer-centric yet deeply analytical approach to business decisions, focused on finding areas where improving the user experience drives growth.</li><br><li>Designed custom semantic analysis tools for on-the-fly text categorization and reporting, including email lists, online downloading and presentations</li><br><li>Provided analytics for a variety of projects using clickstream, SaaS, product, financial and customer data. This includes opening new global markets, digital advertising and in-product discovery. Primary tools include Python and SQL for analysis, with Tableau and d3.js for visualization.</li><br><li>Additional projects include advanced visualization of quantitative data, data organization and internal website design.</li></ul>"

var exelate = [
"Marketing Analyst<br>December 2012 - October 2014",
"<br><br>",
"Led the Data Insights team, in charge of data quality and big data driven marketing materials.",
"<br><ul><li>",
"Responsible for data quality control and monitoring for the Analytics department. Designed and implemented data quality metrics and automated reporting.",
"</li>",
"<br><li>",
"Created custom d3.js office dashboards for visualizing data accuracy, scale and DB health in real time, powered by Python, R and SQL on a Linux infrastructure.",
"</li>",
"<br><li>",
"Developed visualizations and analytical back end for big data driven company products, including marketing analysis platforms for automotive campaign measurement.",
"</li>",
"<br><li>",
"Collaborated with Marketing Dept. to write white papers and other technical promotional material. Created weekly marketing materials for email and social media distribution.",
"</li>",
"</ul>"].join("\n");

var petco = [
"Market Analyst<br>October 2010 - October 2012",
"<br><br>",
"Worked as a Market Analyst within the Financial Analytics/Analytical Services Group.",
"<br><ul><li>",
"Programmed financial models in Python. This included rewriting and fully automating the primary Petco financial model for site selection. The model was originally coded in R, with manual data manipulation in SQL and Excel.", 
"</li>",
"<br><li>",
"Led development of the Petco internal mapping application for site selection analysis, creating online tools capable of advanced geospatial functions and on-the-fly model estimates. ",
"</li>",
"<br><li>",
"Analyzed sales data, quarterly financial data, and demography.", 
"</li>",
"<br><li>",
"Produced maps and web services to present data for the executive team and on-site strategy sessions.",
"</li>",
"</ul>"].join("\n");

var margin = {top:0, right: 0, bottom: 0, left: 0},
    width = x - 360 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg_r = d3.select("#experience").append("svg")
    .attr("width", 1 * parseInt(d3.select('#experience').style('width'), 10))
    .attr("height", 1 * parseInt(d3.select('#experience').style('height'), 10))
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("id", "viz");

d3.select("#experience").attr("align","leftt");

svg_r.append("path")
    .attr("width", "90%")
    .attr("x", 50)
    .attr("y", 50)
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("fill", "none");

svg_r.append("text")
    .style("cursor", "pointer")
    .attr("transform", "translate(" + 15 + "," + (30) +")")
    .style("fill", header_color)
    .style("font-size", 24)
    .text("Intuit")
    .attr("id", "intuit_label")
    .attr("text-anchor", "left")
    .on("click", function() {
	update(intuit, "#exelate_label","#petco_label", "#intuit_label");
    });

svg_r.append("text")
    .style("cursor", "pointer")
    .attr("transform", "translate(" + (parseInt(d3.select('#experience').style('width'),10)-90)  + "," + (30) +")")
    .style("fill", link_color)
    .style("font-size", 16)
    .text("eXelate")
    .attr("id", "exelate_label")
    .attr("text-anchor", "left")
    .on("click", function() {
        update(exelate,"#intuit_label","#petco_label", "#exelate_label");
    });

svg_r.append("text")
    .style("cursor", "pointer")
    .attr("transform", "translate(" + (parseInt(d3.select('#experience').style('width'),10)-170)  + "," + (30) +")")
    .style("fill", "#4af")
    .style("font-size", 16)
    .text("Petco")
    .attr("id", "petco_label")
    .attr("text-anchor", "left")
    .on("click", function() {
        update(petco,"#intuit_label","#exelate_label", "#petco_label");
    });

function update(job_data, move_one, move_two, move_three){

  svg_r.selectAll(move_one).transition().duration(1000)
    .style("font-size", 16)
    .attr("transform", "translate(" + (parseInt(d3.select('#experience').style('width'),10)-90) + "," + (30) +")")
    .style("fill", link_color);

  svg_r.selectAll(move_two).transition().duration(1000)
    .style("font-size", 16)
    .attr("transform", "translate(" + (parseInt(d3.select('#experience').style('width'),10)-170)  + "," + (30) +")")
    .style("fill", link_color);

  svg_r.selectAll(move_three).transition().duration(1000)
    .style("font-size", 24)
    .attr("transform", "translate(" + 15 + "," + (30) +")")
    .style("fill", header_color);

  svg_r.selectAll("foreignObject").remove();

  svg_r.append("foreignObject")
    .attr("width", .9 * parseInt(d3.select('#experience').style('width'), 10))
    .attr("transform", "translate(" + 15 + "," + (40) +")")
    .style("fill", "#333")
    .style("font-size", 14)
    .html(job_data)
    .attr("text-anchor", "left");
}

update(intuit,"#exelate_label","#petco_label", "#intuit_label");
