let vegetables =  new Set();

const pomidor = {
    name: "Pomidor",
    price: 5,
    amount: 10
}

const por = {
    name: "Por",
    price: 6,
    amount: 2
}

const marchew = {
    name: "Marchew",
    price: 2,
    amount: 40
}



vegetables.add(pomidor);
vegetables.add(por);
vegetables.add(marchew);
debugger;
let answer = prompt("Czy chcesz wyszukać po cenie, ilosci czy wyświetlić listę warzyw?");

if (answer === "cena") {
    let prc_answer = +prompt("Ile maksymalnie możesz zapłacic za kilogram warzyw?");
    vegetables.forEach(function (vegetable) {
        if (prc_answer < vegetable.price) {
            vegetables.delete(vegetable);
        }
    });
}
else if (answer ==="ilosc") {
    let amo_answer = prompt("Jaka minimalna ilość warzyw cię interesuje?");

    vegetables.forEach(function (vegetable) {
        if (amo_answer > vegetable.amount) {
            vegetables.delete(vegetable);
        }
    });
} else if (answer != "lista") {
    throw new Error('Wybrałeś złą opcję')
}

vegetables.forEach(function(vegetable) {
    console.log(vegetable);
})