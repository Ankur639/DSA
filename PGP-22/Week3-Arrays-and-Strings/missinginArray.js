const arr=[1,2,3,5];

function missingElement(arr){
    let max = Math.max(...arr);
    let set = new Set(arr);
    let missingElement = arr.length+1;
    for(let i=1;i<=max;i++){
        if(!set.has(i)){
            return i;
        }
        set.add(i);
    }
    return missingElement;
}

console.log(missingElement(arr));