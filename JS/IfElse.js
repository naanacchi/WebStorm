let score = prompt("Whats your score?");
if (+score <= 20)          //the highest true is used the rest are ignored
    console.log("1");
else if (+score <= 40 )
    console.log("2");
else if (+score <= 60)
    console.log("3");
else if (+score <= 80)
    console.log("4");
else if (+score <= 90)
    console.log("5");
else
    console.log("6");
