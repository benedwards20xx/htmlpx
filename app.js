var numRows = 5;
var numCols = 5;

var cellDim = 30;

var puzzle1 = [
  [1,1,0,0,1],
  [0,1,1,1,0],
  [0,1,0,1,0],
  [0,0,1,1,0],
  [0,0,0,0,1]
]

var curPuzzle = puzzle1;

var difficulty = 'easy';

var numErrors = 0;
var maxErrors = 5;
if (difficulty == 'medium') {
  maxErrors = 3;
} else if (difficulty == 'hard') {
  maxErrors = 1;
}

// var inversePuzzle = function(puzzle) {
//   for (row = 0; row < puzzle.length; row++) {
//     puzzle[row] = puzzle[row].reverse();
//     console.log("reversed row: " + puzzle[row]);
    // console.log("isarray row: " + Array.isArray(puzzle[row]));
  // }
  // puzzle = puzzle.reverse();
  // return puzzle;
// }

// var getColTexts = function() {

// }

var getCurrentPuzzleLayout = function() {
  return curPuzzle;
}

var getGridPuzzleNums = function(puzzle) {
  // console.log("numCols: " + puzzle.length);
  var gridTexts = new Array();
  for (var row = 0; row < puzzle.length; row++) {
    // console.log("curPuzzle[col]: "
    //   + curPuzzle[col]);

    var r = getNumsFromGivenRow(puzzle[row]);
    // console.log("getTextFromGivenRow(puzzle[row]): " + r);
    gridTexts.push(r);
    // var givenCol = new Array();
    // for (var col = 0; col < puzzle[row].length; col++) {
    //   givenCol.push(puzzle[row][col]);
    // }
    // console.log("givenCol: " + givenCol);
    // var c = getTextFromGivenRow(givenCol);
    // // console.log("c: " + c);
    // gridTexts.push(c);
  }
  return gridTexts;
}

var getNumsFromGivenRow = function(row) {
  var t = new Array();
  var c = 0;
  // console.log("row: " + row);
  // console.log("row l: " + row.length);
  for (var i = 0; i <= row.length; i++) {
    // if (row[i] == null) {
    //   return t;
    // } else
    // console.log("i: " + i);
    // console.log("row i: " + row[i]);
    // console.log("c: " + c);
    if (row[i] == 1) {
      c++;
    } else {
      if (c != null && c != 0) {
        // t += (c + ' ');
        t.push(c);
        c = 0;
      }
    }
    // console.log("t: " + t);
    // console.log("c: " + c);
  }
  return t;
}

var printGrid = function(grid) {
  for (var row = 0; row < grid.length; row++) {
    var line = "[ ";
    for (var col = 0; col < grid[row].length; col++) {
      line += grid[row][col] + " ";
    }
    line += "] ";
    console.log(line);
  }
}

var clickCell = function(e) {
  // console.log("cell clicked (" + this.row + ", " + this.col + ")");
  // console.log("is mouse down? " + mouseDown);
  // if (mouseDown) {
  if (getCurrentPuzzleLayout()[this.row][this.col]) {
    if (this.state == 0) {
      this.style.background = "black";
      this.style.border = "solid grey 1px";
      this.state = 1;
    } else {
      this.style.background = "white";
      this.style.border = "solid black 1px";
      this.state = 0;
    }
  } else {
    if (this.state == 0) {
      e.preventDefault();
      // this.toggle("highlight");
      // this.animate({backgroundColor: '#FFFFFF'});
      // this.className += ' highlight';
      this.style.background = "red";
      this.style.border = "solid grey 1px";
      this.state = 0;
      numErrors++;
      console.log("numErrors: " + numErrors);
      if (numErrors == maxErrors)
        gameOver();
    }
    // else {
    //   this.style.background = "white";
    //   this.style.border = "solid black 1px";
    //   this.state = 0;
    // }
  }
}

var isCellClickValid = function(cell) {
  var cPuzzle = getCurrentPuzzleLayout();
  if (cPuzzle[cell.row][cell.col]) {
    return true;
  }
  return false;
}

var initGrid = function(grid, colNums, rowNums) {
  initTopRow(grid, colNums);
  for (var row = 0; row < numRows; row++) {
    var rowDiv = document.createElement("div");
    // var rowDiv = document.getElementById("inforowdiv" + row);
    grid.appendChild(rowDiv);
    for (var col = 0; col < numCols; col++) {
      // console.log("row: " + row + ", col: " + col);
      var colDiv = document.createElement("div");
      colDiv.state = 0;
      colDiv.row = row;
      colDiv.col = col;
      colDiv.style.width = cellDim + "px";
      colDiv.style.height = cellDim + "px";
      colDiv.style.background = "white";
      // colDiv.style.color = "black";
      colDiv.style.border = "solid black 1px";
      colDiv.style.display = "inline-block";

      colDiv.addEventListener("click", clickCell);
      // colDiv.addEventListener("mouseenter", clickCell);
      // colDiv.addEventListener("mouseup", clickCell);
      
      rowDiv.appendChild(colDiv);
    }
  }
}

var initTopRow = function(grid, colNums, rowNums) {
  var maxColInfos = getMaxLengthFromInfo(colNums);
  console.log("max length: " + maxColInfos);
  for (var i = 0; i < maxColInfos; i++) {
    var rowDiv = document.createElement("div");
    // rowDiv.style.border = "solid black 1px";
    grid.appendChild(rowDiv);
    var rowContainerDiv = document.createElement("div");
    rowContainerDiv.style.background = "white";
    // rowContainerDiv.style.border = "solid black 1px";
    rowContainerDiv.style.display = "inline-block";
    rowDiv.appendChild(rowContainerDiv);
    var emptyDiv = document.createElement("div");
    emptyDiv.style.width = cellDim + "px";
    emptyDiv.style.height = cellDim + "px";
    // emptyDiv.style.background = "white";
    // emptyDiv.style.border = "solid black 1px";
    emptyDiv.style.display = "inline-block";
    rowContainerDiv.appendChild(emptyDiv);
    for (var col = 0; col < colNums.length; col++) {
      var colDiv = document.createElement("div");
      colDiv.style.width  = cellDim + "px";
      colDiv.style.height = cellDim + "px";
      colDiv.style.background = "#ccc";
      colDiv.style.color = "black";
      // colDiv.style.border = "solid black 1px";
      colDiv.style.display = "inline-block";
      colDiv.style.textAlign = "center";
      colDiv.style.verticalAlign = "bottom";
      // colDiv.innerHTML.verticalAlign = "bottom";
      // var str = "" + colNums[col];
      // var splitStr = str.split(" ");

      // colDiv.innerHTML = str.join(str.split(" "), '\n');
      if (colNums[col][i])
        colDiv.innerHTML = colNums[col][i];
      rowContainerDiv.appendChild(colDiv);
    }
  } 
}

var getMaxLengthFromInfo = function(info) {
  var max = 0;
  for (var i = 0; i < info.length; i++) {
    if (info[i].length > max) 
      max = info[i].length;
  }
  return max;
}

var gameOver = function() {
  console.log("game finished");
}

var initRowInfo = function(rowInfo, rowTexts) {
  console.log("rowInfo: ");
  console.log(rowInfo);
  for (var row = 0; row < rowTexts.length; row++) {
    var infoDiv = document.createElement("inforowdiv" + row);
    console.log("rowTexts[row]: " + rowTexts[row]);
    infoDiv.innerHTML = rowTexts[row];
    infoDiv.style.width = cellDim + "px";
    infoDiv.style.height = cellDim + "px";
    infoDiv.style.background = "white";
    infoDiv.style.color = "black";
    infoDiv.style.border = "solid black 1px";
    infoDiv.style.textAlign = "center";
    // infoDiv.style.display = "inline-block";
    rowInfo.appendChild(infoDiv);
  }
}

var initColInfo = function(colInfo, colTexts) {
  for (var col = 0; col < numCols; col++) {
    
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

printGrid(getCurrentPuzzleLayout());
// console.log("curPuzzle1: " + curPuzzle);
// var invPuzzle = inversePuzzle(curPuzzle);
// console.log("curPuzzle2: " + curPuzzle);
// console.log("invPuzzle: " + invPuzzle);

// var rowTexts = new Array();

var gridNums = getGridPuzzleNums(curPuzzle);
console.log("gridNums: " + gridNums);
// console.log("cTexts: " + getRowTexts(curPuzzle));

var rowNums = gridNums.slice(0, curPuzzle.length);
var colNums = gridNums.slice(curPuzzle.length, gridNums.length+1);

colNums = [[1], [2,2], [3], [4], [5]];
console.log("rowNums: " + rowNums);
console.log("colNums: " + colNums);

// var extra = document.getElementById("extras");
// var colInfo = document.getElementById("colInfo");
// var rowInfo = document.getElementById("rowInfo");
var grid = document.getElementById("grid");


// initRowInfo(grid, rowTexts);
// initColInfo(colInfo, colTexts);
initGrid(grid, colNums, rowNums);