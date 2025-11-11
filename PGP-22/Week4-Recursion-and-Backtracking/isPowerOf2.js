function isPowerOfTwo(n){
    if(n<1) return false;
    if(n===1) return true;
    return isPowerOfTwo(n/2);
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(10))