function reverseString(s) {
  let low = 0;
  let high = s.length - 1;

  function reverseStringHelper(s, low, high) {
    if (low > high) return;
    let temp = s[low];
    s[low] = s[high];
    s[high] = temp;
    reverseStringHelper(s, low + 1, high - 1);
  }

  reverseStringHelper(s, low, high);
  return s;
}

console.log(reverseString(["h","e","l","l","o"]))