function countOfElementSortedArray(arr){
  let fo= firstOccurence(arr);
  if(fo===-1) return 0;
  let lo= lastOccurence(arr);
  return lo-fo+1;
}

function firstOccurence(arr){
    let low =0;
    let high = arr.length-1;
    let ans =-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===target){
           ans = mid;
           high = mid-1;
        }
        else if(arr[mid]>target){
            high = mid-1;
        }
        else {
            low = mid+1;
        }
    }
    return ans;
}

function lastOccurence(arr){
    let low =0;
    let high = arr.length-1;
    let ans =-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===target){
           ans = mid;
           low = mid+1;
        }
        else if(arr[mid]>target){
            high = mid-1;
        }
        else {
            low = mid+1;
        }
    }
    return ans;
}
const target = -1;
console.log(countOfElementSortedArray([2,4,10,10,10,18,20]));