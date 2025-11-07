/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k %(nums.length);
    function reverse(left,right){
        while(left<=right){
            [nums[left],nums[right]]=[nums[right],nums[left]];
            left++;
            right--;
        }
    }
    reverse(0,nums.length-1);
    reverse(0,k-1);
    reverse(k,nums.length-1);
    console.log(nums)

};

rotate([1,2,3,4,5,6,7], k = 3)