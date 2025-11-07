function kthPermutationSequence(n, k) {
    let factorial =[1];
    for(let i=1;i<=n;i++){
        factorial[i]=factorial[i-1]*i;
    }
    let nums =[];
    for(let i=1;i<=n;i++) nums.push(i);
    let result ="";
    k--;
    for(let i=n;i>=1;i--){
        let index = Math.floor((k/factorial[i-1]));
        result = result + nums[index];
        nums.splice(index,1);
        k = k % factorial[i-1];
    }
    return result;
}

console.log(kthPermutationSequence(4,9))
