class warzywo
{
    name = 'noname';
    price = 0;
    amount = 0;
}


let clothes = new Set();                        // new poniewaz powstaje nowy obiekt klasy set. new jest konstruktorem.  ZBIÓR         Przepisac warzywniak uzywajac set, wewnatrz kodu zdefiiowac elementy. obiekty mozna wprowadzac do seta
// metody tu mają żułty kolor
clothes.add('kurtka');
clothes.add('skarpeta');                       // .add dodaje obiekt do zbioru
clothes.delete('skarpetka');             // .delete usuwa obiekt z zbioru




alert(clothes.has('skarpetka'));          // true bo jest taki obiekt
alert(clothes.has('majtki'));            // false bo nie ma takiego obiektu
alert(clothes.size);                          // wyswietla wielkosc zbioru
console.log(clothes);
clothes.add('kurtka');                       // robi nic
clothes.add(250);                            // odporny jest na roznice typow
let pomidor = new warzywo;
pomidor.name='pomidor';
pomidor.price=5;
pomidor.amount=75;
clothes.add(new warzywo)
clothes.add(pomidor);
for(let item of clothes) console.log(item);
for(let item of clothes.keys()) console.log(item.name);
for(let item of clothes.keys()) console.log(item.amount);
