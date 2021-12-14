let myhuman = ["Adam","Justin","Kacper","Filip"]
document.writeln("I have in possesion: " + myhuman + "<br>");

//removed = myhuman.splice(2,0,"ᛞᚨᚹᛁᛞ");
removed = myhuman.splice(1,1);  // 3 is starting point, 1 is how many i want to delete
document.writeln("I Killed:  " +removed+ "<br>");
document.writeln("After killing "+removed+" I'm left with:  " +myhuman+ "<br>");
removed = myhuman.splice(1,1,"Żywczak");
document.writeln("I replaced "+removed+" with:  " +myhuman+"<br>");
document.writeln("After that I'm left with:  " +myhuman+ "<br>");
removed = myhuman.splice(0,0,"Maciek" )
document.write("which one do you want? <br>")





