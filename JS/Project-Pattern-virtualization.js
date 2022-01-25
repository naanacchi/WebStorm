class BasePrice
{
    name = 'base'
    price = 20
    brandManager = 'Karol Kowalski'
}

class MidPrice
{
    name = 'mid'
    price = 50
    brandManager = 'Maciej Nowak'
}

class AAAPrice
{
    name = 'aaa'
    price = 250
    brandManager = 'Marianna Srebrna'
    publishers = ['EA', 'Microsoft']
}
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
        priceType.display = function()
        {
            return document.write(`${this.brandManager} is responsible for ${this.name} (the suggested price is ${this.price})`);
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
}
GamesFactory();