let arr = [20, 17, 15, 14, 13, 12, 10, 9, 8, 4, 2];

let target = 2222;

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, target));
