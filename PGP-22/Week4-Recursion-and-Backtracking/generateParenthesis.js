function generateParenthesis(n) {
  let result = [];
  generateParenthesisHelper("", result, n);
  return result;
}

function generateParenthesisHelper(current, result, n) {
  if (current.length > 2 * n) {
    return;
  }

  let open = 0;
  let close = 0;
  for (const char of current) {
    if (char === "(") open++;
    else close++;
  }
  if (close > open) return;
  if (close > n || open > n) return;
  if (current.length === 2 * n) {
    result.push(current);
    return;
  }

  generateParenthesisHelper(current + "(", result, n);
  generateParenthesisHelper(current + ")", result, n);
}

console.log(generateParenthesis(3))
