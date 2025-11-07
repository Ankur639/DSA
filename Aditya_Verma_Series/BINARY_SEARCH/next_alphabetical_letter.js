let arr = ["a", "c", "f", "h"];

let key = "b";

function nextAlphabeticalLetter(arr) {
  let low = 0;
  let high = arr.length - 1;
  let res;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      low= mid+1;
    }
    if (arr[mid] < key) {
      low = mid + 1;
    } else {
      res = arr[mid];
      high = mid - 1;
    }
  }
  return res;
}
console.log(nextAlphabeticalLetter(arr));
