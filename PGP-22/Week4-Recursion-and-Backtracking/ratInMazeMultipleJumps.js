const matrix = [
  [2, 1, 0, 0],
  [3, 0, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
];

const matrix1 = [
    [2, 1, 0, 0],
    [2, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 0, 0, 1],
  ];

function shortestDistance(matrix) {
  let n = matrix.length;
  const sol = Array.from({ length: n }, () => Array(n).fill(0));

  function isSafe(x, y) {
    return x >= 0 && y >= 0 && x < n && y < n && matrix[x][y] > 0;
  }

  function dfs(x, y) {
    if (x === n - 1 && y === n - 1) {
      sol[x][y] = 1;
      return true;
    }

    if (!isSafe(x, y)) return false;

    sol[x][y] = 1;
    let maxJump = matrix[x][y];

    for (let i = 1; i <= maxJump; i++) {
      if (dfs(x, y + i)) return true;
    }

    for (let i = 1; i <= maxJump; i++) {
      if (dfs(x + i, y)) return true;
    }

    sol[x][y] = 0;
    return false;
  }
  if (dfs(0, 0)) return true;

  return [[-1]];
}

console.log(shortestDistance(matrix));
console.log(shortestDistance(matrix1));