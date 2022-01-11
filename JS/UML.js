class student
{
    #name = "Adam";
    #surname = "Grzesiowski";
    #pesel = "11321123321";

    constructor(name, surname, pesel)
    {
        this.#name = name;
        this.#surname = surname;
        this.#pesel = pesel;
    }

    getName = function ()
    {
        return this.#name;
    }
    getSurname ()
    {
        return this.#surname;
    }
    #getPesel ()
    {
        return this.#pesel;
    }
    display ()
    {
        document.write()
    }

}
