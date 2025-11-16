function powerSet(s){
    let x = s.split("");
    let result =[];

    function powerSetHelper(current,index){
        if(index > s.length){
            return;
        }

        if([...current].length <= s.length){
            result.push(current);
            return;
        }

        for(let i=index;i<s.length;i++){
            current.push(s[i]);
            powerSetHelper(current,i);
            current.pop();
        }
    }
    powerSetHelper([],0)
    console.log(result);
}

powerSet("abc");