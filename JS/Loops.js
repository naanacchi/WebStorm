
/*
let tnr = [1,2,3,4,5,6,7]
    ,tcolor = ["red","blue","green"]
    ,nr = prompt("wat nr u lookin fo")
    ,color = prompt("wat color u lookin fo")
    ,gotnr = false
    ,gotcolor = false;
for (let i=0;i<tnr.length;i++)
    if (+nr === tnr[i])
        gotnr = true;
for (let i=0;i<tcolor.length;i++)
    if (color === tcolor[i])
        gotcolor = true;
if (true === gotcolor && gotcolor=== gotnr)
    document.write("we got what you need")
else if (gotcolor === true)
    document.write(`we dont have the nr ${nr}`)
else if (gotnr === true)
    document.write(`we dont have the color ${color}`)
else
    document.write(`we dont have the nr ${nr} or the color ${color}`)

    */

let licz = 10;
// pętla do ... while
do {
    console.log("Pętla do ... while")
    console.log("Odliczam");
    licz--;
    document.write(licz);
}
while (licz <= 0)

// pętla while
while (licz <=0)
{
    console.log("Pętla while")
    console.log("Odliczam");
    licz--;
    document.write(licz);
}