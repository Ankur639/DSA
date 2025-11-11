function combinationSum(candidates,target){
    let ans =[];
    function combinationSumHelper(current,index,target){
        if(index> candidates.length){
            return;
        }
        if(target < 0){
            return;
        }

        if(target===0){
            ans.push([...current]);
            return;
        }

        for(let i=index;i<candidates.length;i++){
            current.push(candidates[i]);
            combinationSumHelper(current,i,target-candidates[i]);
            current.pop();
        }
    }
    combinationSumHelper([],0,target);
    return ans;

}

console.log(combinationSum([2,3,6,7],7))