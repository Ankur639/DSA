let arr = [10, 3, 40, 20, 50, 80, 70];
let target = 40;

function serachInNearlySortedArray(arr) {
  let low = 0;
  let high = arr.length - 1;
  let n = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if(arr[mid]===target) return mid;
    if(mid-1>=low && arr[mid-1]===target) return mid-1;
    if(mid+1<n && arr[mid+1]===target) return mid+1;
    if (arr[mid] > target) {
      high = mid - 2;
    } else {
      start = mid + 2;
    }
  }
  return -1;
}
console.log(serachInNearlySortedArray(arr));
