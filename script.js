// SVG+D3 margin convention
const margin = { top: 20, right: 30, bottom: 40, left: 100 },
  width = 900 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

// Boilerplate for setting up the SVG
const svg = d3
  .select("#dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const emplData = [
  {
    "DATE": "1/1/19",
    "EMPLOYMENT": 7424
  },
  {
    "DATE": "2/1/19",
    "EMPLOYMENT": 7396
  },
  {
    "DATE": "3/1/19",
    "EMPLOYMENT": 7422
  },
  {
    "DATE": "4/1/19",
    "EMPLOYMENT": 7459
  },
  {
    "DATE": "5/1/19",
    "EMPLOYMENT": 7486
  },
  {
    "DATE": "6/1/19",
    "EMPLOYMENT": 7511
  },
  {
    "DATE": "7/1/19",
    "EMPLOYMENT": 7525
  },
  {
    "DATE": "8/1/19",
    "EMPLOYMENT": 7530
  },
  {
    "DATE": "9/1/19",
    "EMPLOYMENT": 7551
  },
  {
    "DATE": "10/1/19",
    "EMPLOYMENT": 7556
  },
  {
    "DATE": "11/1/19",
    "EMPLOYMENT": 7545
  },
  {
    "DATE": "12/1/19",
    "EMPLOYMENT": 7528
  },
  {
    "DATE": "1/1/20",
    "EMPLOYMENT": 7580
  },
  {
    "DATE": "2/1/20",
    "EMPLOYMENT": 7608
  },
  {
    "DATE": "3/1/20",
    "EMPLOYMENT": 7539
  },
  {
    "DATE": "4/1/20",
    "EMPLOYMENT": 6527
  },
  {
    "DATE": "5/1/20",
    "EMPLOYMENT": 7009
  },
  {
    "DATE": "6/1/20",
    "EMPLOYMENT": 7170
  },
  {
    "DATE": "7/1/20",
    "EMPLOYMENT": 7195
  },
  {
    "DATE": "8/1/20",
    "EMPLOYMENT": 7225
  },
  {
    "DATE": "9/1/20",
    "EMPLOYMENT": 7256
  },
  {
    "DATE": "10/1/20",
    "EMPLOYMENT": 7310
  },
  {
    "DATE": "11/1/20",
    "EMPLOYMENT": 7317
  },
  {
    "DATE": "12/1/20",
    "EMPLOYMENT": 7355
  },
  {
    "DATE": "1/1/21",
    "EMPLOYMENT": 7363
  },
  {
    "DATE": "2/1/21",
    "EMPLOYMENT": 7291
  },
  {
    "DATE": "3/1/21",
    "EMPLOYMENT": 7395
  },
  {
    "DATE": "4/1/21",
    "EMPLOYMENT": 7406
  },
  {
    "DATE": "5/1/21",
    "EMPLOYMENT": 7394
  },
  {
    "DATE": "6/1/21",
    "EMPLOYMENT": 7400
  },
  {
    "DATE": "7/1/21",
    "EMPLOYMENT": 7415
  },
  {
    "DATE": "8/1/21",
    "EMPLOYMENT": 7431
  },
  {
    "DATE": "9/1/21",
    "EMPLOYMENT": 7472
  },
  {
    "DATE": "10/1/21",
    "EMPLOYMENT": 7514
  },
  {
    "DATE": "11/1/21",
    "EMPLOYMENT": 7560
  },
  {
    "DATE": "12/1/21",
    "EMPLOYMENT": 7594
  },
  {
    "DATE": "1/1/22",
    "EMPLOYMENT": 7590
  },
  {
    "DATE": "2/1/22",
    "EMPLOYMENT": 7669
  },
  {
    "DATE": "3/1/22",
    "EMPLOYMENT": 7692
  },
  {
    "DATE": "4/1/22",
    "EMPLOYMENT": 7698
  },
  {
    "DATE": "5/1/22",
    "EMPLOYMENT": 7736
  },
  {
    "DATE": "6/1/22",
    "EMPLOYMENT": 7749
  },
  {
    "DATE": "7/1/22",
    "EMPLOYMENT": 7773
  },
  {
    "DATE": "8/1/22",
    "EMPLOYMENT": 7781
  },
  {
    "DATE": "9/1/22",
    "EMPLOYMENT": 7797
  },
  {
    "DATE": "10/1/22",
    "EMPLOYMENT": 7814
  },
  {
    "DATE": "11/1/22",
    "EMPLOYMENT": 7833
  },
  {
    "DATE": "12/1/22",
    "EMPLOYMENT": 7859
  },
  {
    "DATE": "1/1/23",
    "EMPLOYMENT": 7885
  },
  {
    "DATE": "2/1/23",
    "EMPLOYMENT": 7899
  },
  {
    "DATE": "3/1/23",
    "EMPLOYMENT": 7888
  },
  {
    "DATE": "4/1/23",
    "EMPLOYMENT": 7903
  }
 ]

 // Determine y-domain based on employment values
// const yMin = d3.min(emplData, (d) => d.EMPLOYMENT);
// const yMax = d3.max(emplData, (d) => d.EMPLOYMENT);


// ScaleLinear
const xScale = d3
  .scaleTime()
  .domain([new Date(2019, 0), new Date(2023, 4)])
  .range([0, width]);

const yScale = d3
  .scaleLinear()
  .domain([6000, 8000])
  .range([height, 0]);

const xAxis = d3.axisBottom(xScale).ticks(d3.timeYear);
const yAxis = d3.axisLeft(yScale);

// Draw x-axis
svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);

// Draw y-axis
svg.append("g").attr("class", "y-axis").call(yAxis);

// Create the line generator
const line = d3
  .line()
  .x((d) => xScale(new Date(d.DATE)))
  .y((d) => yScale(d.EMPLOYMENT));

// Append the line to the SVG
svg
  .append("path")
  .datum(emplData)
  .attr("class", "line")
  .attr("d", line)
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("stroke-width", 2);

// Add x-axis label
svg
  .append("text")
  .attr("class", "x-axis-label")
  .attr("x", width / 2)
  .attr("y", height + margin.bottom)
  .attr("text-anchor", "middle")
  .text("Year");

// Add y-axis label
svg
  .append("text")
  .attr("class", "y-axis-label")
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2)
  .attr("y", -margin.left + 15)
  .attr("text-anchor", "middle")
  .text("No. of People Employed");

// Add title
svg
  .append("text")
  .attr("class", "chart-title")
  .attr("x", width / 2)
  .attr("y", -margin.top / 3)
  .attr("text-anchor", "middle")
  .text("Employment Data Over Time");
