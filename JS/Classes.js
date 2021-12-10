
class warzywa
{
    Name = "empty";
    Price = 0.00;
    Stock = 0;
}

let warzywo = new Array(2);
for(let i=0;i<3;i++)
{
    warzywo[i] = new warzywa;
    warzywo[i].Name = prompt('Podaj nazwe warzywa: ');
    warzywo[i].Price = prompt('Podaj cene warzywa');
    warzywo[i].Stock = prompt('Podaj ilosc warzywa w magazynie');
}
/*
for(let i=0;i<3;i++)
{
    document.write(warzywo[i].Name+ " Mamy w cenie: ");
    document.write(warzywo[i].Price+ " I mamy ich w magazynie: ");
    document.write(warzywo[i].Stock);
    document.write('<br>');
}
*/
/*
for(let i=0;i<3;i++)
{
    if(warzywo[i].Price<5)
        document.write('Warzywa o cenie mniejszej niz 5 to:'+warzywo[i].Name+ ' , ');
}
*/

let answer = prompt("Cena Czy ilosc dostepnych warzyw");
if(answer==="cena")
{
    let PriceA = prompt("Jaki masz limit hajsu");
    for(let i=0;i<3;i++)
    {
        if (PriceA >=warzywo[i].Price)
        {
            document.write(' W tej cenie mamy ' +warzywo[i].Name);
            document.write(' W cenie ' +warzywo[i].Price);
            document.write(' w ilości ' +warzywo[i].Stock);
            document.write('<br>');
        }
    }
}
if(answer==="ilosc")
{
    let StockA = prompt(' Ile chcesz ')
    for(let i=0;i<3;i++)
    {
        if (StockA <=warzywo[i].Stock)
        {
            document.write(' W tej ilosci mamy ' +warzywo[i].Name);
            document.write(' o cenie ' +warzywo[i].Price);
            document.write(' w ilości ' +warzywo[i].Stock);
            document.write('<br>');
        }
    }
}


/*


// alert(komora.brand);
//let text = prompt("Podaj treść sms-a");
//komora.sendSms(text);
//document.write(komora.sms);
//alert(komora);

/*
let telefon = new Phone;

 */
telefon.user = 'Tomek';
let telefony=[komora,telefon];
alert(telefony[1].user);
*/

/*
let warzywa = new Array(20);
warzywa[0]=new Phone;
warzywa[0].user='bob';
alert(warzywa[0].user);
*/

