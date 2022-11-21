function clapCount(num){
    let count=0;
    for (let i=num;i>=3;i--){
        let strnum=i.toString();
        if(strnum.includes("3") || strnum.includes("6")||strnum.includes("9"))
            ++count;
    }
    return count;
}
const readline=;
const rl=readline.createInt
let count=readline.;
console.log("number  result");
for (let i=count;i<count;i++){
    let input=prompt();
    console.log(clapCount(input));
}


