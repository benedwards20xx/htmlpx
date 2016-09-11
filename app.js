var grid = document.getElementById("grid");

var inversePuzzle = function(puzzle) {
  for (row = 0; row < puzzle.length; row++) {
    // puzzle = puzzle[row].reverse();
    console.log("reversed row: " + puzzle[row]);
    console.log("isarray row: " + Array.isArray(puzzle[row]));
  }
  puzzle = puzzle.reverse();
  return puzzle;
}

// var getColTexts = function() {

// }

var getGridTexts = function(puzzle) {
  console.log("numCols: " + puzzle.length);
  for (var row = 0; row < puzzle.length; row++) {
    // console.log("curPuzzle[col]: "
    //   + curPuzzle[col]);

    var r = getTextFromGivenRow(puzzle[row]);
    console.log("getTextFromGivenRow(puzzle[row]): " + r);

    rowTexts.push(r);
  }
  return rowTexts;
}

var getTextFromGivenRow = function(row) {
  var t = "";
  var c = 0;
  console.log("row: " + row);
  console.log("row l: " + row.length);
  for (var i = 0; i <= row.length; i++) {
    // if (row[i] == null) {
    //   return t;
    // } else
    console.log("i: " + i);
    console.log("row i: " + row[i]);
    console.log("c: " + c);
    if (row[i] == 1) {
      c++;
    } else {
      if (c != null && c != 0) {
        t += (c + " ");
        c = 0;
      }
    }
    console.log("t: " + t);
    console.log("c: " + c);
  }
  return t;
}

var clickCell = function() {
  console.log("cell clicked (" + this.row + ", " + this.col + ")");
  // console.log("is mouse down? " + mouseDown);
  // if (mouseDown) {
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

var initGame = function() {
  for (var row = 0; row < numRows; row++) {
    var rowDiv = document.createElement("div");
    grid.appendChild(rowDiv);
    for (var col = 0; col < numCols; col++) {
      console.log("row: " + row + ", col: " + col);
      var colDiv = document.createElement("div");
      colDiv.state = 0;
      colDiv.row = row;
      colDiv.col = col;
      colDiv.style.width = cellDim + "px";
      colDiv.style.height = cellDim + "px";
      colDiv.style.background = "white";
      colDiv.style.color = "black";
      colDiv.style.border = "solid black 1px";
      colDiv.style.display = "inline-block";
      var grid = document.getElementById("grid");
      // console.log(grid);
      

      colDiv.addEventListener("click", clickCell);
      // colDiv.addEventListener("mouseenter", clickCell);
      // colDiv.addEventListener("mouseup", clickCell);
      
      rowDiv.appendChild(colDiv);
    }
  }
}

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });

// UPDATE IF FIGURE OUT DRAG AND COLOR //
// var mouseDown = 0;

// document.body.onmousedown = function() {
//   ++mouseDown;
// }

// document.body.onmouseup = function() {
//   --mouseDown;
// }

var numRows = 5;
var numCols = 5;

var cellDim = 30;

var puzzle1 = [
  [0,0,0,0,1],
  [0,1,1,1,0],
  [0,1,0,1,0],
  [0,1,1,1,0],
  [1,0,0,0,0]
]

console.log("isarray puzzle1: " + Array.isArray(puzzle1));

var curPuzzle = puzzle1;
console.log("curPuzzle1: " + curPuzzle);
var invPuzzle = inversePuzzle(curPuzzle);
console.log("curPuzzle2: " + curPuzzle);
console.log("invPuzzle: " + invPuzzle);

var rowTexts = new Array();

console.log("rTexts: " + getGridTexts(curPuzzle));

initGame();