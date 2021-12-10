const pc1 = 20, pc2 = "white";
let user1 = prompt(`guess the nr. (${pc1})`);
let user2 = prompt(`guess the color. (${pc2})`);    // `` and ${} used for variable in string

let corr = false ;

if (+user1 === pc1 && user2 === pc2) // && both values have to be true
    corr = true;

if (corr === true)
console.log("Both Correct!")
if (corr === false)
    console.log("At least 1 Wrong!")

if (+user1 === pc1 || user2 === pc2)  // || one or two values have to be true
    corr = true;

if (corr === true)
    console.log("At least 1 Correct!")
if (corr === false)
    console.log("Both Wrong!")
