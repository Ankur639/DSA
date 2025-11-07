/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let sum = nums.reduce((acc,curr)=>acc+curr,0);
    let minSum = minimumSumSubArray(nums);
    let maxSum = maximumSumSubArray(nums);
    let circularSum = sum-minSum;
    if(maxSum>0) return Math.max(maxSum,circularSum);
    return maxSum;
};

function maximumSumSubArray(nums){
    let sum = nums[0];
    let maxSum = nums[0];

    for(let i=1;i<nums.length;i++){
        sum = Math.max(sum + nums[i],nums[i]);
        maxSum =Math.max(sum,maxSum);
    }
    return maxSum;
}

function minimumSumSubArray(nums){
    let sum = nums[0];
    let minSum = nums[0];

    for(let i=1;i<nums.length;i++){
        sum = Math.min(sum + nums[i],nums[i]);
        minSum =Math.min(sum,minSum);
    }
    return minSum;
}

console.log(maxSubarraySumCircular([1,-2,3,-2]));