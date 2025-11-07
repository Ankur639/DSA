const arr = [11, 12, 15, 18, 1, 1, 1, 2, 5, 6, 8];
let target = 1;

function elementInSortedRotatedArray(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low++;
      high--;
      continue;
    }
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] < target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
}
console.log(elementInSortedRotatedArray(arr));
