function myAtoi(s) {
  s = s.trim();
  let i = 0,
    sign = 1,
    num = 0;
  if (s.length === 0) return 0;
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    num = num * 10 + (s[i].charCodeAt(0) - "0".charCodeAt(0));
    i++;
  }
  num = num * sign;
  let INT_MAX = 2 ** 31 - 1;
  let INT_MIN = -(2 ** 31);
  if (num > INT_MAX) return INT_MAX;
  if (num < INT_MIN) return INT_MIN;
  return num;
}

console.log(myAtoi(" -042"));
