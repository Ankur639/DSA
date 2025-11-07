const arr = [1, 2, 3, 4, 8, 10, 10, 12, 19];
let target = 5;

function floorOfElement(arr) {
  let low = 0;
  let high = arr.length - 1;
  let res = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      res = mid;
      break;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      res = arr[low];
      low = mid + 1;
    }
  }
  console.log(res);
}
floorOfElement(arr);
