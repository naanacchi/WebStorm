 let bazaOwoc = ["papaja","banan","truskawka","mandarynka"]
     bazaCena = [5,7,9,11]
    owoc = prompt("Jakiego owocu szukasz")
    gotOwoc = false
    cena = [] ;

for (let i=0;i<bazaOwoc.length;i++)
    if (owoc === bazaOwoc[i])
    { gotOwoc = true;
     cena = bazaCena[i]
    }
if (true === gotOwoc)
    document.write(`Mamy ${owoc} w cenie ${cena} zł`)
else
    document.write(`Przykro nam, nie mamy ${owoc}`)




