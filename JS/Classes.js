class warzywka
{
    this.Name[] = "empty";
    this.Price[] = 0.00;
    this.Stock[] = 0;
}

Questions = function()
{
    for(let i=0;i<3;i++)
    {
        this.Name[i] = prompt(' Whats the name of the vegetable? ');
        this.Price[i] = +prompt(' Whats the price of the vegetable? ');
        this.Stock[i] = +prompt(' How many in stock? ');
    }

}

Doer = function()
{
    warzywka.Questions();
    alert("you have chosen: " +this.Name+ " <br> ");
    let choose = prompt('a - by amount, p - by price')
    if(choose === a)
    {
        this.AmountA = +prompt('How many things you want?');
        for(let i=0;i<3;i++)
        {
            if (AmountA >=this.Amount[i])
            {
            document.write('We have: ' +this.Name[i]+ ' in the amount of: ' +this.Amount[i]+ 'and the price: ' +this.price[i]+ '<br>' );
            }
        }
    }
    else if(choose === p)
    {
        this.PriceA = +prompt('How much you want to spend?');
        for(let i=0;i<3;i++)
        {
            if (PriceA >=this.Price[i])
            {
                document.write('We have: ' +this.Name[i]+ ' in the amount of: ' +this.Amount[i]+ 'and the price: ' +this.price[i]+ '<br>' );
            }
        }
    }
}
Display = function()
{
warzywka.Doer();
}
/*
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
/*
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
*/

/*


// alert(komora.brand);
//let text = prompt("Podaj treść sms-a");
//komora.sendSms(text);
//document.write(komora.sms);
//alert(komora);

/*
let telefon = new Phone;

 */
/*
telefon.user = 'Tomek';
let telefony=[komora,telefon];
alert(telefony[1].user);


/*
let warzywa = new Array(20);
warzywa[0]=new Phone;
warzywa[0].user='bob';
alert(warzywa[0].user);
*/

