class Student {
    #name='name';
    #surname='surname';
    #pesel='032801655584';
    constructor(name,surname,pesel)
    {
        this.#name;
        this.#surname;
        this.#pesel;
    }
    getname = function()
    {
        return this.#name;
    }
    getsurname()
    {
        return this.#surname;
    }
    #getpesel()
    {
        return this.#pesel;
    }
    display()
    {
        document.write(this.#name+'<BR>'+this.#surname+'<BR>'+this.#pesel);
    }
    getDoB()
    {
        let str = this.#getpesel().slice(0,6);
        let str5 =+str.slice(2,4);
        let str6=str.slice(5,6);
        let spr5 = str.slice(2,4);
        let spr1 = 22;
        let spr2 = 42;
        let spr3 = 53;


        if(+str.slice(2,4)>20)
            let str1 = 'rok ' + '20' + str.slice(0, 2) + '<BR>'
        else
            let str1 = 'rok ' + '19' + str.slice(0, 2) + '<BR>';
        let str1 = 'rok ' + 20 + str.slice(0,2) + '<BR>';
        let str2='miesiac '+str.str4+'<BR>';
        let str4 =str.slice(2,4)-20;
        let str3 = 'dzien '+str.slice(4,6) + '<BR>';

        return str1+str2+str3;
        //return this.#getpesel().slice(0,6);
    }
}
let Student1=new Student('Julia', 'Nowak', '032801655584');
document.write(Student1.getDoB());

/*
let Student1=new Student() //('bob', 'marley', '12345678370');
Student1.#name=prompt('podaj imie studenta');
Student1.#surname=prompt('podaj nazwisko studenta');
Student1.#pesel=prompt('podaj pesel studenta');
 */
//let Student1=new Student('bob', 'marley', '12345678370');
//var str ='bobak';
//document.write(str.slice(1,4));
//var str2 =str.slice(1,4);
//var str3 =str.substring(1,2);
//document.write(str2);
//document.write(str3);
