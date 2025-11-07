const arr = [2, 1, 5, 6, 3],
  k = 3;

function minimumSwapsRequires(arr, k) {
  let count = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= k) {
      count++;
    }
  }
  let currentWindow = 0;
  for (let i = 0; i <= count - 1; i++) {
    if (arr[i] <= k) {
      currentWindow++;
    }
  }
  let ans = count - currentWindow;
  for(let i= count;i<n;i++){
    if(arr[i]<=k) currentWindow++;
    if(arr[i-count]<=k) currentWindow--;
    ans = Math.min(ans,count -currentWindow);
  }
  return ans;
}

console.log(minimumSwapsRequires(arr,k));
