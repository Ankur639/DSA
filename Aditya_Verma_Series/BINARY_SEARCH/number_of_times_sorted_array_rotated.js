const arr = [11, 12, 15, 18, 2, 5, 6, 8];

function numberOfTimesArrayIsSorted(arr) {
  let low = 0;
  let high = arr.length - 1;
  let n = arr.length;
  while (low <= high) {
    if (arr[low] <= arr[high]) return low;
    let mid = Math.floor((low + high) / 2);
    let prev = (mid + n - 1) % n;
    let next = (mid + 1) % n;
    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) return mid;
    if (arr[low] <= arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

console.log(numberOfTimesArrayIsSorted(arr)); // 4
