let arr = [
  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
let key = 90;

function firstOccurenceInInfiniteSortedArray(arr) {
  let low = 0;
  let high = 1;
  while (arr[high] !== 1) {
    low = high;
    high = high * 2;
  }
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      ans = mid;
      high = mid - 1;
    }
    if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  console.log(ans);
}

firstOccurenceInInfiniteSortedArray(arr);
