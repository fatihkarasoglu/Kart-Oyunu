let cardsArray = [];
let sonuc = 0;
let kazanmak = false;
let devam = false;
let sonucEl = document.getElementById("sonuc");
let CardsEl = document.getElementById("cards");
let messageEl = document.getElementById("message-el");
let message = "";

let player = {
    name: "Fatih",
    kredi: 150
}

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.kredi;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if(randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}

function startGame() {
    kazanmak = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArray = [firstCard, secondCard];
    sonuc = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    CardsEl.textContent = "Kartlar: ";
    for(let i = 0; i < cardsArray.length; i++) {
        CardsEl.textContent += cardsArray[i] + " ";
    }

    sonucEl.textContent = "Sonuç: " + sonuc;
    if (sonuc <= 20) {
        message = ("Yeni bir kart çekmek ister misiniz?");
    } else if (sonuc === 21) {
        message = ("Tebrikler! Oyunu kazandınız.");
        kazanmak = true;
    } else {
        message = ("Oyunu kaybettiniz.")
        devam = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if(devam === true && kazanmak === false) {
        let newCard = getRandomCard();
        sonuc += newCard;
        cardsArray.push(newCard);
        renderGame();
    }
}