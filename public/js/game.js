//global variables
var dealerSum = 0;
var yourSum = 0;
var dealerAceCount = 0;
var playerAceCount = 0;
var hidden;
var deck;

//Will allow the user to draw card whenever yourSum is less than <= 21
var canHit = true;


window.onload =function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let types = ["C", "H", "D", "S"];
    deck = [];

    //LOOP THROUGHT THE 2 ARAAYS
    //FIRST GO THROUGH ALL THE TYPES
    for (let i = 0; i < types.length; i++) {
        //THEN GO THROUGH ALL YouR VALUES
        for(let j = 0; j <values.length; j++){
            
            deck.push(values[j] + types [i]);
           
        }
    }
    console.log(deck);
}

function shuffleDeck() {
    for(let i = 0; i <deck.length; i++){
        //gives us a number between 0 and 52
        let j = Math.floor(Math.random()* deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame () {
    hidddn = deck.pop();
    dealerSum+= getRandomValues(hidden);
    dealerAceCount += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealerSum);
    while (dealerSum < 17) {
        //created imnage tag
        let cardImg = document.createElement("img");
        //get card from deck
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        //increment dealer sum 
        dealerSum=+ getValue(card);
        dealerAceCount += checkAce(card);
        //appedn the image card to the dealer-card div 
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum );

    for (let i = 0; i < 2; i++);{
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        yourSum=+ getValue(card);
        playerAceCount += checkAce(card); 
        document.getElementById("player-cards").append(cardImg);
    }

    console.log(playerSum);


    //EVENT LISTENER FOR BUTTONS
    document.getElementById("hit").addEventListener("click" , hit);

    //EVENT LISTEENR FOR STAY BUTTON
    document.getElementById("stay").addEventListener("click" , stand);
}


//HIT BUTTON FUCNTION
function hit(){
   if(!canHit) {
    return;
   }
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    yourSum=+ getValue(card);
    playerAceCount += checkAce(card); 
    document.getElementById("player-cards").append(cardImg);
//CANNOT EXCEED OVER 21    
    if(reduceAce(playerSum, playerAceCount) > 21) {
        canHit = false;
    }
    
}


//STAnd BUTTON FUNCTION
function stand() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    playerSum = reduceAce(playerSum, playerAceCount);

    canHit = false;
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";


    let message = "";
    if (playerSum > 21) {
        message = "You Lose"
    } else if (dealerSum > 21) {
        message ="You Win!"
    }

    //IF PLAYER AND DEALER HAVE <21
    else if (playerSum == dealerSum) {
        message = "Tie!";
    }
    else if (playerSum > dealerSum) {
        message = "You Win!";
    }
    else if (playerSum < dealerSum) {
        message = "You Lose!";
    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("player-sum").innerText = playerSum;
    document.getElementById("results").innerText = message;
}

function getValue(card) {
    let data = card.split();
    let value = data[0];
    //if it's not a number (containing digists)
    //If its not a number it can be: A J Q K
    if (isNaN(value)){ 
        if (value == "A"){
            return 11;
        }
        return 10;
    }
    //If a value is not returned from ^^^^. That means a number was returned
    return parseInt(value);
        
}
    

function checkAce(card) {
    if (card[0] == "A"){
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}