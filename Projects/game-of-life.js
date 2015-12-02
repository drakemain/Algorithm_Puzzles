//https://leetcode.com/problems/game-of-life/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

 // live with < 2 -> dies
 // live with 2||3 -> lives
 // live with > 3 -> dies
 // dead with == 3 -> lives
//var board = [[1,0,1],[0,0,0],[0,0,1]];

var board = [[1]];

var gameOfLife = function(board) {
  var tempBoard = new Array;
  var rows = board.length - 1;
  var columns = board[0].length - 1;

  for (var row in board) {
    tempBoard[row] = new Array;

    for (var column in board[row]) {
      console.log("THIS CELL IS " + row + " " + column);

      if (cellWillLive(liveNeighborCounter(Number(row), Number(column), rows, columns, board), board[row][column])) {
        console.log("TRUE");
        tempBoard[row][column] = 1;
      } else {
        console.log("FALSE");
        tempBoard[row][column] = 0;
      }
    }
  }

  board = tempBoard;
  console.log(board);
};

var liveNeighborCounter = function(currentRow, currentColumn, totalRows, totalColumns, board) {
  var neighborCounter = 0;
  var relativeRow;
  var relativeColumn;
  var neighbors = [[-1, -1], [-1, 0], [-1, 1],
                   [0, -1],           [0, 1],
                   [1, -1],  [1, 0],  [1, 1]]

  for (var neighbor in neighbors) {
    neighbor = Number(neighbor);
    console.log("Checking neighbor " + neighbors[neighbor] + " of cell " + currentRow + " " + currentColumn);

    relativeRow = currentRow + neighbors[neighbor][0];
    relativeColumn = currentColumn + neighbors[neighbor][1];

    if ((relativeRow >= 0 && relativeRow <= totalRows) && (relativeColumn >= 0 && relativeColumn <= totalColumns)) {
      if (board[relativeRow][relativeColumn] === 1) {
        console.log("Neighbor is live");
      } else if (board[relativeRow][relativeColumn] === 0) {
        console.log("Neighbor is dead");
      } else {
        console.log("Neighbor ERR");
      }

      neighborCounter += board[relativeRow][relativeColumn];
    } else {
      console.log("Neighbor DNE");
    }
  }

  return neighborCounter;
};

var cellWillLive = function(liveNeighbors, currentCellStatus) {
  console.log("Cell status is " + currentCellStatus + " with " + liveNeighbors + " live neighbors.");

  if (liveNeighbors === 2 && currentCellStatus === 1) {
    console.log("cond1");
    return true;
  } else if (liveNeighbors === 3) {
    console.log("cond2");
    return true;
  } else {
    console.log("condOther");
    return false;
  }
}

gameOfLife(board);

//console.log(liveNeighborCounter(0,1,board.length - 1, board[0].length - 1))