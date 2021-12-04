function rand(){
	return Math.floor(Math.random()*6)+1;
}


let score = [];
let randNum = 0;
let totalPlayer = 2;
let currentPlayer = 1;

for(let i=0; i < totalPlayer; i++){
	score.push(0);
}

const allButtonEl = document.querySelectorAll('button');

function buttonLock(target){
	target.disabled = true;
}

function buttonUnlock(){
	allButtonEl.forEach(function(allButtonEl){
		allButtonEl.disabled = false;
	});	
}

function newGame(){
	const allPlayerCountEl = document.querySelectorAll('.player_group li .count');
	allPlayerCountEl.forEach(function (allPlayerCountEl) {
    allPlayerCountEl.innerText = 0;
  });
	const diceEl = document.querySelector('.dice span');
	diceEl.innerText = 0;
}


function playTurnChange(hold){	
	const currentPlayerCountEl = document.querySelector('.player_group li.active .count');
	if(!hold){
		score[currentPlayer - 1] = 0;
		currentPlayerCountEl.innerText = 0;
	}

	if(currentPlayer < totalPlayer){
		currentPlayer++;
	}else{
		currentPlayer = 1;
	}

	const nextPlayerEl = document.querySelector('.player_group li:nth-child(' + currentPlayer + ')');
	const allPlayerEl = document.querySelectorAll('.player_group li');

	allPlayerEl.forEach(function (playerEl) {
    playerEl.classList.remove('active');
  });

	nextPlayerEl.classList.add('active');

	buttonUnlock();
	
}

function scoreChange(randNum){
	playerScore = score[currentPlayer - 1];
	score[currentPlayer - 1] = playerScore + randNum;

	const currentPlayerCountEl = document.querySelector('.player_group li.active .count');
	currentPlayerCountEl.innerText = score[currentPlayer - 1];

	if(score[currentPlayer - 1] >= 100){
		alert(currentPlayer + '번 플레이어 승리!!!');

		delay(function(){
			newGame();
		},300);
		
	}

	buttonUnlock();
}

function delay(callback, time){
	setTimeout(function(){
		callback();
	},time);
}

function pigdiceStart(){
	newGame();

	const btnRollDiceEl = document.querySelector('.roll_dice'); 
	btnRollDiceEl.addEventListener('click', function(event){
			buttonLock(event.target);
			randNum = rand();
			
			const diceEl = document.querySelector('.dice span');
			diceEl.innerText = randNum;

			if(randNum === 1){
				delay(function(){
					alert('숫자1 다음 플레이어 턴');
					playTurnChange();
				},300);
			}else{
				delay(function(){
					scoreChange(randNum);
				},200);
			}

	});

	const btnHoldEl = document.querySelector('.hold'); 
	btnHoldEl.addEventListener('click', function(){
		delay(function(){
			playTurnChange('hold');
		},300);
	});

	const btnNewGameEl = document.querySelector('.new_game'); 
	btnNewGameEl.addEventListener('click', function(){
		newGame();
	});
	
}

pigdiceStart();  