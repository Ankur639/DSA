/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let maxSoFar =0;
    let count =0;

    for(let i=0;i<arr.length;i++){
        maxSoFar = Math.max(maxSoFar,arr[i]);
        if(maxSoFar===i) count++;
    }
    return count;
};

