class DefaultPizza
{
    Cheese = 0;
    Tuna = 0;
    Pineapple = 0;
    Price = 0;
    Kcal = 0;

    Questioner = function()
{

    do {this.Cheese = +prompt(" How many % of cheese do you want? ");}
    while (this.Cheese > 100 || this.Cheese < 0)
    do {this.Tuna = +prompt(" How many % of tuna do you want? ");}
    while (this.Tuna > 100 || this.Tuna < 0)
    do {this.Pineapple = +prompt(" How many % of pineapple do you want? ");}
    while (this.Pineapple > 100 || this.Pineapple < 0)
}

    Calc = function()
{
    Pizza.Questioner();
    this.Price = (this.Cheese * CheesePrice) + (this.Tuna * TunaPrice) + (this.Pineapple * PineapplePrice)+7;
    this.Kcal = (this.Cheese * CheeseKcal) + (this.Tuna * TunaKcal) + (this.Pineapple * PineappleKcal)+45;
}

    Display = function()
{
    Pizza.Calc();
    document.write(`You have choosen ${this.Cheese}% of cheese, ${this.Tuna}% of tuna, ${this.Pineapple}% of pinepple. The final price is ${this.Price} PLN<br>`);
    document.write(`Your pizza have ${this.Kcal} Kcal <br>`);
}

}
const Pizza = new DefaultPizza()
const CheesePrice = .04;
const TunaPrice = .04;
const PineapplePrice = .02;
const CheeseKcal = 712;
const TunaKcal = 218;
const PineappleKcal = 50;
Pizza.Display();