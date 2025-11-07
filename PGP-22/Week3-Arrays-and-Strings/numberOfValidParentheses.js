function factorial(n) {
   if(n===0) return 1;
   return n* factorial(n-1);
  }
  
  function numOfValidParentheses(n) {
    n = n / 2; // for generating pairs we need so we need to do n/2
    return factorial(2 * n) / (factorial(n + 1) * factorial(n));
  }
  
  console.log(numOfValidParentheses(2)); 
  console.log(numOfValidParentheses(4)); 
  console.log(numOfValidParentheses(6)); 
  