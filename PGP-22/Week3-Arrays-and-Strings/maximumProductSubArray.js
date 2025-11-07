/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let leftProduct =1;
    let rightProduct=1;
    let result = -Infinity;
    let n = nums.length
 
    for(let i=0;i<nums.length;i++){
       leftProduct = leftProduct * nums[i];
       rightProduct = rightProduct * nums[n-i-1];
       result = Math.max(result,leftProduct,rightProduct);
       if(leftProduct===0) leftProduct=1;
       if(rightProduct===0) rightProduct=1;
    }
    return result;
 };
 console.log(maxProduct([2,3,-2,4]));