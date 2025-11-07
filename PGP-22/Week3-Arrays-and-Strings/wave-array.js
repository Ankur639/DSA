const arr = [1, 2, 3, 4, 5]


function waveArray(arr){
    let i=0,j=1,n=arr.length;
    while(i<n && j<n){
        [arr[i],arr[j]]=[arr[j],arr[i]];
        i+=2;
        j+=2;
    }
    console.log(arr);
}
waveArray(arr);