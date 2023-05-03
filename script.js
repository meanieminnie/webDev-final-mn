// SVG+D3 margin convention
const margin = {top: 20, right: 30, bottom: 40, left: 100},
    width = 900 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// boilerplate for setting up the SVG
let svg = d3.select("#dataviz")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);



// ScaleLinear
const xScale = d3.scaleTime()
.domain([new Date(2019,00) , new Date(2023,00)]) // input data
.range([0, width]) // output visual representation



// const circleSizeScale = d3.scaleLinear()
// .domain([0 , 1000000]) // input data
// .range([1, 25]) //radius


// scaleBand
const yScale = d3.scaleLinear()
.domain([0, 200000])
.range([height , 0])

var xAxis = d3.axisBottom(xScale)


// use d3 to draw axes based on the scales
svg.append("g").call(d3.axisLeft(yScale))

svg.append("g")
.attr("transform", `translate(0, ${height})`)
.call(xAxis.ticks(d3.timeYear))

// svg.append("g").call(d3.axisBottom(xScale))

