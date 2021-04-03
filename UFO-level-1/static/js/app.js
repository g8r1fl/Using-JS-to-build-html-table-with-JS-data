
// YOUR CODE HERE!
// from data.js
var tableData = data;

console.log("tableData", tableData);

// for now, hardcode a datetime

tableData.forEach(function (item) {
  console.log(item["datetime"]);
});

// next, let's build our js filter(s).
let date = "1/1/2010";

// filter right? You only want elts with that date.
tableData.filter((datum) => {
  // optional: check if the datetime key exists
  // return datum.datetime === uFillThisIn // this is the guy u need to look at
});

// YOUR CODE HERE!
let filteredData = tableData.slice(0, 10);

let table = d3.select("tbody");

tableData.forEach((rec) => {
  let tr = table.append("tr");
  tr.append("td").text(rec.datetime);
  tr.append("td").text(rec.state);
});

d3.select("button").on("click", () =>
  filteredData.forEach((rec) => {
    let tr = table.html("").append("tr");
    tr.append("td").text(rec.datetime);
    tr.append("td").text(rec.city);
  })
);