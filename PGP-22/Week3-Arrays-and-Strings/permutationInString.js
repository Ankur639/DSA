/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let n = s1.length;
  let m = s2.length;
  if (n > m) return false;

  let s1Map = new Array(26).fill(0);
  let s2Map = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Map[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  function isSame(s1Map, s2Map) {
    for (let i = 0; i < 26; i++) {
      if (s1Map[i] !== s2Map[i]) return false;
    }
    return true;
  }

  let i = 0,
    j = 0;
  while (j < m) {
    s2Map[s2.charCodeAt(j) - "a".charCodeAt(0)]++;
    if (j - i + 1 > n) {
      s2Map[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
      i++;
    }
    if (isSame(s1Map, s2Map)) {
      return true;
    }
    j++;
  }
  return false;
};


console.log(checkInclusion("ab", "eidbaooo"))