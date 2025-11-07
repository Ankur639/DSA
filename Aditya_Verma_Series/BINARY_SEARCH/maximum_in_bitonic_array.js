let arr = [1, 3, 8, 12, 16, 20, 25, 4, 2]; //bitonic array is the array which increases frist and then decreases.
function maximumInBitonicArray(nums) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid > 0 && mid < nums.length - 1) {
      if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
        return mid;
      } else if (nums[mid] > nums[mid + 1]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (mid === 0) {
      if (nums[mid] > nums[mid + 1]) {
        return 0;
      } else {
        return 1;
      }
    } else if (mid === nums.length - 1) {
      if (nums[nums.length - 1] > nums[nums.length - 2]) {
        return nums.length - 1;
      } else {
        return nums.length - 2;
      }
    }
  }
}

console.log(maximumInBitonicArray(arr));
