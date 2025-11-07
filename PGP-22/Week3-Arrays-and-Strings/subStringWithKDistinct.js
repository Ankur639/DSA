function countSubstrings(s,k){
    return atMostK(s,k)-atMostK(s,k-1);
}

function atMostK(s,k){
    let left=0;
    let arr= new Array(26).fill(0);
    let n = s.length;
    let distinct =0,count=0;

    for(let right=0;right<n;right++){
        let rightIdx = s.charCodeAt(right)- 97;
        if(arr[rightIdx]===0) distinct++;
        arr[rightIdx]++;

        while(distinct > k){
            let leftIdx = s.charCodeAt(left)-97
            arr[leftIdx]--;
            if(arr[leftIdx]===0) distinct--;
            left++;
        }
        count += (right-left+1);

    }
    return count;
}

console.log(countSubstrings("abc",2));