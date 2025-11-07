/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let result =[];
    let candidate1=null,candidate2=null,count1=0,count2=0;

    for(let num of nums){
        if(candidate1===num){
            count1++;
        }
        else if(candidate2===num){
            count2++;
        }
        else if(count1===0){
            candidate1= num;
            count1=1;
        }
        else if(count2===0){
            candidate2=num;
            count2=1;
        }
        else{
            count1--;
            count2--;
        }

    }
    count1=0;
    count2=0;
    for(let i=0;i<nums.length;i++){
        if(candidate1===nums[i]){
            count1++;
        }
        if(candidate2===nums[i]){
            count2++;
        }
    }

    if(count1 > Math.floor(nums.length/3)) result.push(candidate1);
    if(count2> Math.floor(nums.length/3)) result.push(candidate2);
    return result;
};

console.log(majorityElement([3,2,3]))