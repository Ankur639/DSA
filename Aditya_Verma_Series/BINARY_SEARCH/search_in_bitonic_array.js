module.exports = { 
       solve : function(A, B){
          function findPeakElementInBitonicArray(nums){
              let low =0;
              let high = nums.length-1;
              while(low<=high){
                  let mid = Math.floor((low+high)/2);
                  if(mid>0 && mid<nums.length-1){
                      if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]) return mid;
                      else if(nums[mid]>nums[mid+1]){
                          high = mid-1;
                      }
                      else{
                          low = mid+1;
                      }
                  }
                  else if(mid===0){
                      if(nums.length===1) return 0;
                      if(nums[mid]>nums[mid+1]){
                          return 0;
                      }
                      else{
                          return 1;
                      }
                  }
                  else if(mid===nums.length-1){
                      if(nums[nums.length-1]>nums[nums.length-2]){
                          return nums.length-1;
                      }
                      else{
                          return nums.length-2;
                      }
                  }
                  
              }
          }
          
          function searchInArrayAscending(nums,low,high,target){
              while(low<=high){
                  let mid = Math.floor((low+high)/2);
                  if(nums[mid]===target) return mid;
                  else if(nums[mid]>target){
                      high = mid-1;
                  }
                  else{
                      low = mid+1;
                  }
              }
              return -1;
          }
          
          function searchInArrayDescending(nums,low,high,target){
           
              while(low<=high){
                  let mid = Math.floor((low+high)/2);
                  if(nums[mid]===target) return mid;
                  else if(nums[mid]>target){
                      low = mid+1;
                  }
                  else{
                      high = mid-1;
                  }
              }
              return -1;
          }
          
          
          let a = findPeakElementInBitonicArray(A);
          let x = searchInArrayAscending(A,0,a,B);
          let y = searchInArrayDescending(A,a+1,A.length-1,B);
          
          if(x===-1 && y!==-1) return y;
          else if(x===-1 && y===-1) return -1;
          else return x;
       }
   };
   