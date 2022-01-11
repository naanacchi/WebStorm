let myhuman = ["Adam","Justin","Kacper","Filip"]
document.writeln("I have in possesion: " + myhuman + "<br>");

//removed = myhuman.splice(2,0,"ᛞᚨᚹᛁᛞ");
removed = myhuman.splice(1,1);  // 3 is starting point, 1 is how many i want to delete

document.writeln("I Killed:  " +removed+ "<br>");

document.writeln("After killing "+removed+" I'm left with:  " +myhuman+ "<br>");

removed = myhuman.splice(1,1,"Żywczak"); // w removed jest usuniety element

document.writeln("I deleted "+removed+" and Im left with:  " +myhuman+"<br>");

document.writeln("After that I'm left with:  " +myhuman+ "<br><br><br>");





let a = 5;
function zmien(a)
{
    //   a=a+5    // nie da 10 bo funkcje są zmiennymi lokalnymi  czyli tylko między tymi nawiasami klamrowymi
    return a+5;
}
document.write(zmien(a));



