/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//dice = wiskunde.afronden ( hier kan je een cijfer invoeren bijv 10.2 wordt 10 * 6 ) + 1 omdat hij anders 6+1 = 7 doet ipv keer 6 + 1 en plus 1 omdat de nul ook meetelt.
//dice = Math.floor(Math.random() * 6) + 1;

//document.queryselector is net als css selecteren heel makkelijkdus met textcontent kan je geen html invoeren dus alleen de text veranderen
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';

//waarde lezen met texcontent en een variabel
//x = document.querySelector('#score-0').textContent;
//console.log(x);




//viriabelen aangeven om het netjes te houden
var scores, roundScore,activePlayer;


//waardes geven aan de variabelen
scores = [0,0];
roundScore = 0;
activePlayer = 0;



//style veranderen met style. voer nu css property in wat je wilt veranderen dus style en dan in string 'none' bijvoorbeeld of hidden of show.
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
//random nummer
var dice = Math.floor(Math.random() * 6) + 1;

//uitkomst
var diceDOM = document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src = 'dice-' + dice + '.png'


//update alleen als we niet een 1 hebben gerold



});
