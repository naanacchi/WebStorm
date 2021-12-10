class Room
{
    width = 200;
    length = 220;
    desk = false;
    space = function()
    {
        return this.width * this.length;
    }
    display = function ()
    {
        console.log(`szerokosc ${this.width}, lengths ${this.length}, powierzchnia ${this.space()}, ma biurko ${this.desk}`);
    }
}

const room = new Room();
console.log(room.display());