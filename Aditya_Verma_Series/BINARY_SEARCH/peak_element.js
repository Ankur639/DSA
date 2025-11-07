arr = [40, 30, 20, 10];

function peakElement(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid > 0 && mid < nums.length - 1) {
      if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
        return mid;
      } else if (nums[mid] > nums[mid + 1]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (mid === 0) {
      if (nums.length === 1) return 0;
      if (nums[mid] > nums[mid + 1]) {
        return mid;
      } else {
        return mid + 1;
      }
    } else if (mid === nums.length - 1) {
      console.log(mid);
      if (nums[nums.length - 1] > nums[nums.length - 2]) {
        return nums.length - 1;
      } else {
        return nums.length - 2;
      }
    }
  }
}
console.log(peakElement(arr));
