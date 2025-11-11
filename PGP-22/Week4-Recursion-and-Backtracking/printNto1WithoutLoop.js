function printNTo1WithoutLoop(n){
    if(n===0) return;
    console.log(n)
    printNTo1WithoutLoop(n-1);
}

printNTo1WithoutLoop(10);