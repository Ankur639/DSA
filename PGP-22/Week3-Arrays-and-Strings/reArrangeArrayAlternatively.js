function rearrange(arr) {
    // code here
    let n = arr.length;
    let maxIndex = n-1;
    let minIndex =0;
    arr.sort((a,b)=>a-b);
    let maxElement = arr[n-1]+1;
    for(let i=0;i<n;i++){
        if(i%2===0){
            arr[i]+=(arr[maxIndex]%maxElement)*maxElement;
            maxIndex--;
        }
        else{
            arr[i]+=(arr[minIndex]%maxElement)*maxElement;
            minIndex++;
        }
    }

    for(let i=0;i<arr.length;i++){
        arr[i]=Math.floor(arr[i]/maxElement);
    }
    return arr;
}

console.log(rearrange([1, 2, 3, 4, 5, 6]))