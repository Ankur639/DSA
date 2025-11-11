function readBinaryWatch(turnedOn){
    let result =[]
    for(let h=0;h<12;h++){
        for(let m=0;m<60;m++){
            let countBits = count(h)+ count(m);
            if(countBits === turnedOn){
                result.push(`${h}:${m.toString().padStart(2,'0')}`);
            }
        }
    }
    return result;
}

function count(num){
    let count =0;
     while(num){
        num = num &(num-1);
        count ++;
     }
     return count;
}

console.log(readBinaryWatch(1))