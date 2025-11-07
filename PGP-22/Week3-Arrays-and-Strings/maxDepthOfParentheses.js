const s = "(1+(2*3)+((8)/4))+1"

function maximumDepthOfParentheses(s){
    let depth =0;
    let maximumDepth =0;

    for(let ch of s){
        if(ch==='('){
            depth++;
            maximumDepth = Math.max(depth,maximumDepth);
        }
        else if(ch===')'){
            depth--;
        }
    }
    return maximumDepth;
}

console.log(maximumDepthOfParentheses(s));