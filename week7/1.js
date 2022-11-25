const bridge = ['U', 'D', 'U', 'D'];
let choice = ['U', 'D', 'U', 'D'];
console.log(bridge);
console.log(choice);
console.log("After");


const result=choice.reduce((acc, currentValue, currentIndex) => {
        if (currentValue == "U") {
            acc.up += "O";
            acc.down += " ";
        } else {
            acc.up += " ";
            acc.down += "O";
        }
        return acc;
    }, {up:[], down:[]});
Object.keys(result).forEach((item)=>console.log(Array.from(result[item]).join(" | ")));



// let up=Array(bridge.length).fill(" "),down=Array(bridge.length).fill(" ");
// choice.forEach((item,index)=>{
//     if (item=='U') up[index]=item==bridge[index]?"O":"X";
//     else down[index]=item==bridge[index]?"O":"X";
// });
// console.log("[",up.join(' | '),"]");
// console.log("[",down.join(' | '),"]");
