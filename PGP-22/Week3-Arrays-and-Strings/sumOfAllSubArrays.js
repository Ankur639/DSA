const arr=[1,2,3];

function sumOfAllSubArray(arr){
    let sum =0;
    let n = arr.length;
    for(let i=0;i<n;i++){
        sum = sum + (i+1)*(n-i)*arr[i];
    }
    return sum;
}

console.log(sumOfAllSubArray(arr));