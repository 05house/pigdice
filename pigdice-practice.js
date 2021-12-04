let score = 0;
let randNum = 0;
let totalPlayer = 2;
let player = 1;

function rand(){
	return Math.floor(Math.random()*6)+1;
}

const allPlayerCountEl = document.querySelectorAll('.player_group li .count');

function scoreReset(){
	score = 0;
	randNum = 0;

	allPlayerCountEl.forEach(function (playerCount) {
    playerCount.innerText = 0;
  });

}

function newGame(){
	score = 0;
	randNum = 0;
	player = 1;

	allPlayerCountEl.forEach(function (playerCount) {
    playerCount.innerText = 0;
  });
}


function playTurnChange(){	
	const playerGroupEl = document.querySelector('.player_group');

	if(player < totalPlayer){
		player++;
	}else{
		player = 1;
	}

	const currentPlayerEl = document.querySelector('.player_group li:nth-child(' + player + ')');
	const allPlayerEl = document.querySelectorAll('.player_group li');

	allPlayerEl.forEach(function (playerEl) {
    playerEl.classList.remove('active');
  });

	currentPlayerEl.classList.add('active');

	scoreReset();
}

function scoreChange(randNum){
	score += randNum;
	const currentPlayerCountEl = document.querySelector('.player_group li.active .count');
	// console.log(player + "번 플레이어 숫자" + randNum + " 합계:" + score);
	currentPlayerCountEl.innerText = score;

	if(score >= 100){
		//console.log('a');
		delay(function(){
			alert(player + '번 플레이어 승리!!!');
		},300);
		
		//newGame();
	}
}

function delay(callback, time){
	setTimeout(function(){
		callback();
	},time);
}

function pigdiceStart(){

	const btnRollDiceEl = document.querySelector('.roll_dice'); 

	btnRollDiceEl.addEventListener('click', function(){
		//if(randNum !== 1){
			randNum = rand();
			
			const diceEl = document.querySelector('.dice span');
			diceEl.innerText = randNum;

			if(randNum === 1){
				//console.log(player + "번 플레이어 숫자1, 다음 플레이어 턴");
				delay(function(){
					alert('숫자1 다음 플레이어 턴');
					playTurnChange();
				},300);
			}else{
				delay(function(){
					scoreChange(randNum);
					// if(score >= 100){
					// 	console.log('a');
					// 	// alert(player + '번 플레이어 승리!!!');
					// 	newGame();
					// }
				},200);
			}
		//}

	});
	
}

pigdiceStart();  