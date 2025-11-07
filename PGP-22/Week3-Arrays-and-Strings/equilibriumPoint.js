const arr =[1,2,0,3];

function equilibriumPoint(arr){
    let left =0;
    let sum = arr.reduce((acc,curr)=>acc+curr,0);
    for(let i=0;i<arr.length;i++){
      let right = sum-arr[i]-left;
      if(left===right){
        return i;
      }
      left+=arr[i];
    }
    return -1;
}
console.log(equilibriumPoint(arr));