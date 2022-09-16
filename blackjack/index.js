let cards =[]
let messageEl=document.getElementById("message-el");
let sum = 0
let cardsEl =document.getElementById("cards-el");
let sumEl=document.getElementById("sum-el");
let isAlive=true;
let hasBlackjack = false;



function startGame(){
    let firstNumber= Math.floor(Math.random()*10)+1;
    let SecondNumber= Math.floor(Math.random()*10)+1;
    cards =[firstNumber,SecondNumber]
    for(let i = 0;i<cards.length;i++){
    cardsEl.textContent+= " " +cards[i] +" , " ;
    sum=firstNumber +SecondNumber;
    sumEl.textContent="Sum: " +sum;
    }
    renderGame()
    }
function renderGame(){
        if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "YOU LOST!"
        isAlive = false
    }
    messageEl.textContent = message
}

   


function newCard(){
    let card= Math.floor(Math.random()*10)+1;
    cards.push[card];
    cardsEl.textContent+=card + " , ";
    sum+=card;
    sumEl.textContent="Sum: " +sum
    renderGame()
}

function reset(){
    cardsEl.textContent= "Cards: "
    sumEl.textContent="Sum: "
    
}
