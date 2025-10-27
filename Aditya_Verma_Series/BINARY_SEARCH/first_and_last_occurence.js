let arr = [2,4,10,10,10,18,20];
let target =23;
console.log(firstOccurence(arr));
console.log(lastOccurence(arr));

function firstOccurence(arr){
    let low = 0;
    let high = arr.length-1;
    let ans =-1
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===target){
            ans = mid;
            high = mid-1;
        }
        else if(arr[mid]>target){
            high = mid-1;
        }
        else{
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
            low=mid+1;
        }
        else if(arr[mid]>target){
            high = mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return ans;
}