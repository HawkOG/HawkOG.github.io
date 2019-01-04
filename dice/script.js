// Author: Erikas Turskis

var button = document.getElementById('roll_btn').addEventListener('click', function(){
    var diceRollOne = Math.floor(Math.random() * 6 + 1);
    var diceRollTwo = Math.floor(Math.random() * 6 + 1);
    
    
    var dice1 = document.querySelector('.dice1');
    dice1.src = `img/dice${diceRollOne}.png`;

    var dice1 = document.querySelector('.dice2');
    dice1.src = `img/dice${diceRollTwo}.png`;

    var score = document.querySelector('.score');
    var sum = diceRollOne + diceRollTwo;

    score.innerHTML = `Dice roll: ${sum}`;
});