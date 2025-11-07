const arr = [4, 6, 10];
let key = 7;

let low = 0;
let high = arr.length - 1;
let x = 0;
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === key) {
    x = arr[mid];
    return;
  } else if (arr[mid] > key) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
  if (x) console.log(x);
  else {
    if (Math.abs(arr[low] - key) > Math.abs(arr[high] - key)) {
      console.log(arr[high]);
    } else {
      console.log(arr[low]);
    }
  }
}
