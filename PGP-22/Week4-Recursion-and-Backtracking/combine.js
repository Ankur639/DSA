function combine(n,k){
    const nums = [...Array(n)].map((_,i)=>i+1);
    const result =[];
    function combineHelper(current,index,k){
        if(current.length === k){
            result.push([...current]);
            return;
        }

        for(let i=index;i<nums.length;i++){
            current.push(nums[i]);
            combineHelper(current,i+1,k);
            current.pop();
        }
    }
    combineHelper([],0,k);
    return result;
}

console.log(combine(4,2));