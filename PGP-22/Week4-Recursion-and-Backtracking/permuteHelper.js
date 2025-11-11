function permuteUnique(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  let visited = new Array(nums.length).fill(false);

  function permuteUniqueHelper(current, index) {
    if (index === nums.length) return;
    if ([...current].length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

      current.push(nums[i]);
      visited[i]=true;
      permuteUniqueHelper(current, i);
      current.pop();
      visited[i]=false;
    }
  }
  permuteUniqueHelper([],0);
  return result;
}

console.log(permuteUnique([1,1,2]))