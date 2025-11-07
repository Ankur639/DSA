const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let key = 11;

function searchInInfiniteSortedArray(arr) {
  let low = 0;
  let high = 1;

  while (key > arr[high]) {
    low = high;
    high = high * 2;
  }
//   high = Math.min(high,arr.length-1);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) return mid;
    else if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(searchInInfiniteSortedArray(arr));
