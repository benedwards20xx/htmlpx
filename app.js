var numRows = 5;
var numCols = 5;

var cellDim = 30;

var grid = document.getElementById("grid");

var clickCell = function() {
  console.log("cell clicked");
  if (this.state == 0) {
    this.style.background = "black";
    this.style.border = "solid grey 1px";
    this.state = 1;
  } else {
    this.style.background = "white";
    this.style.border = "solid black 1px";
    this.state = 0;
  }
}

for (var row = 0; row < numRows; row++) {
  var rowDiv = document.createElement("div");
  grid.appendChild(rowDiv);
  for (var col = 0; col < numCols; col++) {
    console.log("row: " + row + ", col: " + col);
    var colDiv = document.createElement("div");
    colDiv.state = 0;
    colDiv.style.width = cellDim + "px";
    colDiv.style.height = cellDim + "px";
    colDiv.style.background = "white";
    colDiv.style.color = "black";
    colDiv.style.border = "solid black 1px";
    colDiv.style.display = "inline-block";
    var grid = document.getElementById("grid");
    // console.log(grid);
    colDiv.addEventListener("click",clickCell);
    rowDiv.appendChild(colDiv);
  }
}

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });


