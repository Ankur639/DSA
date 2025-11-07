const arr = [1, 2, 3, 4, 8, 10, 10, 12, 14];
let target = 9;

function ceilOfElementArray(arr) {
  let low = 0;
  let high = arr.length - 1;
  let res = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      res = arr[mid];
      break;
    }
    else if(arr[mid]>target){
        res = arr[mid];
        high = mid-1;
    }
    else{
        low=mid+1;
    }
  }
  return res;
}
console.log(ceilOfElementArray(arr));