function longestPalindromicSubstring(s) {
  let memo = Array.from({ length: 100 }, () => Array(100).fill(undefined));

  function isPalindrome(s, i, j) {
    if (memo[i][j] !== undefined) return memo[i][j];
    if (i >= j) return true;
    if (s[i] === s[j]) {
      return (memo[i][j] = isPalindrome(s, i + 1, j - 1));
    } else {
      return false;
    }
  }

  let maxLength = -1;
  let start = -1,
    n = s.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isPalindrome(s, i, j)) {
        if (j - i + 1 > maxLength) {
          maxLength = j - i + 1;
          start = i;
        }
      }
    }
  }

  return s.slice(start, start + maxLength);
}
console.log(longestPalindromicSubstring("babad"));
