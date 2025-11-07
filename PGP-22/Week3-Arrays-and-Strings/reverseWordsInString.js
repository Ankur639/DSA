function reverseWordsInString(s){
    let newString = s.trim().split(" ").filter((x)=>x!=="").reverse().join(" ");
    return newString;
}

console.log(reverseWordsInString("a good   example"))