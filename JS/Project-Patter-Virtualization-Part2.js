class MidPrice
{
    name = "mid";
    price = 50;
    brandManager = "Maciej Nowak";
    /* display()
 {
     return document.write(`${this.brandManager} is responsible for ${this.name} (the suggested price is ${this.price})`);
 }*/
}
class AAAPrice
{
    name = "aaa";
    price = 250;
    brandManager = "Marianna Srebrna";
    Company = ["EA","Microsoft"];
    /* display()
     {
         return document.write(`${this.brandManager} is responsible for ${this.name} (the suggested price is ${this.price})`);
     }*/
}
class BasePrice
{
    name = "base";
    price = 20;
    brandManager = "Anna Marys";
    /* display()
 {
     return document.write(`${this.brandManager} is responsible for ${this.name} (the suggested price is ${this.price})`);
 }*/
    GetPrice()
    {

    }
}
function Gameset()
{
    let Gameset=[];
    game.push(new MidPrice());
    game.push(new AAAPrice());
    game.push(new BasePrice());
    for (let i = 0; i < Gameset.length; i++)
    {
        Gameset[i].display();
        document.write("<br>");
    }
}
//Games();

class PriceGameTypeFactory
{
    createGamePriceType(type)
    {
        let priceType;
        if (type === "baseprice")
        {
            priceType = new BasePrice();
        }
        else if (type === "midprice")
        {
            priceType = new MidPrice();
        }
        else if (type === "aaaprice")
        {
            priceType = new AAAPrice();
        }
        priceType.display()
        {
            return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
        }
        return priceType;
    }
}
function GamesFactory()
{
    let games=[];
    let gameFactory = new PriceGameTypeFactory();
    let aaaPrice = gameFactory.createGamePriceType("aaaprice");

    games.push(aaaPrice);
    games.push(gameFactory.createGamePriceType("baseprice"));
    games.push(gameFactory.createGamePriceType("midprice"));
    games.push(gameFactory.createGamePriceType("baseprice"));

    for (let i = 0; i < games.length; i++)
    {
        games[i].display();
        document.write("<br>");
    }
    GamesFactory();
}
