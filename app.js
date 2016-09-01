var numRows = 5;
var numCols = 5;

var cellDim = 30;

var grid = document.getElementById("grid");

for (var row = 0; row < numRows; row++) {
  var rowDiv = document.createElement("div");
  grid.appendChild(rowDiv);
  for (var col = 0; col < numCols; col++) {
    console.log("row: " + row + ", col: " + col);
    var colDiv = document.createElement("div");
    colDiv.style.width = cellDim + "px";
    colDiv.style.height = cellDim + "px";
    colDiv.style.background = "white";
    colDiv.style.color = "black";
    colDiv.style.border = "solid black 1px";
    colDiv.style.display = "inline-block";
    var grid = document.getElementById("grid");
    // console.log(grid);
    rowDiv.appendChild(colDiv);
  }
}



