const ans = 20;
let guess = prompt("guess the nr. ("+ans+")");
let corr = false ;

if (+guess === ans)  // + is used in variable to change string input into int
    corr = true;

if (corr === true)
console.log("Correct!")
if (corr === false)
    console.log("Wrong!")


if (+prompt("guess the nr (15)") === 15)
    document.write("Correct!");        //write on page
else
    document.write("Wrong!");