//Modify an array such that if 'arr[i]' is 'j' then arr[j] becomes i

function modifyArray(arr){
  let n = arr.length;
  for(let i=0;i<n;i++){
    let j = arr[i]%n;
    arr[j]=arr[j]+(i*n);
  }
  for(let i=0;i<n;i++){
    arr[i]=Math.floor(arr[i]/n);
  }
  return arr;
}

console.log(modifyArray([1, 3, 0, 2]))