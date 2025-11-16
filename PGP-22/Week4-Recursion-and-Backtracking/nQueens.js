function nQueen(n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    let rowBoard = [];
    for (let j = 0; j < n; j++) {
      rowBoard.push(".");
    }
    board.push(rowBoard);
  }
  let result =[]
  console.log(board)
  return solveNQueenHelper(0, board, n, result);
  
}

function isSafe(board, row, col,n) {
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "Q") return false;
  }
  for (let i = 0; i < col; i++) {
    if (board[row][i] === "Q") return false;
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }

  for (let i = row - 1, j = col + 1; i >=0 && j < n; i++, j++) {
    if (board[i][j] === "Q") return false;
  }
  return true;
}

function solveNQueenHelper(row, board, n, result) {
  if (row === n) {
    let copy = board.map((r) => r.join(""));
    result.push(copy);
    return;
  }

  for (let col = 0; col < n; col++) {
    if (isSafe(board, row, col,n)) {
      board[row][col] = "Q";
      solveNQueenHelper(row + 1, board, n, result);
      board[row][col] = ".";
    }
  }
  return result;
}


console.log(nQueen(4));