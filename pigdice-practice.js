let score = [];
let randNum = 0;
let totalPlayer = 2; 
let currentPlayer = 1;

//totalplayer 개수만큼 array 생성
for(let i=0; i < totalPlayer; i++){
	score.push(0);
}

const allButtonEl = document.querySelectorAll('button');

//랜덤숫자 반환
function rand(){
	return Math.floor(Math.random()*6)+1;
}

//버튼 비활성화
function buttonLock(target){
	target.disabled = true;
}

//버튼 활성화
function buttonUnlock(){
	allButtonEl.forEach(function(allButtonEl){
		allButtonEl.disabled = false;
	});	
}

//신규 게임 시작하기
function newGame(){
	const allPlayerCountEl = document.querySelectorAll('.player_group li .count');
	allPlayerCountEl.forEach(function (allPlayerCountEl) {    
		allPlayerCountEl.innerText = 0;//HTML 플레이어 점수 0으로
  });
	const diceEl = document.querySelector('.dice span');

	diceEl.innerText = 0;//주사위 숫자 초기화

	//score 배열에 저장된 점수 0으로
	for(let i=0; i < totalPlayer; i++){
		score[i] = 0;
	}
	playerActive(1);
}

//플레이어 순서 변경
function playTurnChange(hold){	
	const currentPlayerCountEl = document.querySelector('.player_group li.active .count');

	if(hold !== 'hold'){//hold 버튼을 누르지 않았을 경우	
		score[currentPlayer - 1] = 0;//score 배열 현재 플레이어 점수 0으로		
		currentPlayerCountEl.innerText = 0;//HTML 현재 플레이어 점수 0으로
	}

	//현재 플레이어 증감
	if(currentPlayer < totalPlayer){
		currentPlayer++;
	}else{
		currentPlayer = 1;
	}

	playerActive(currentPlayer);

	buttonUnlock();

}

//다음 플레이어 활성화
function playerActive(num){
	const nextPlayerEl = document.querySelector('.player_group li:nth-child(' + num + ')');
	const allPlayerEl = document.querySelectorAll('.player_group li');

	//모든 플레이어 활성화 해제
	allPlayerEl.forEach(function (playerEl) {
    playerEl.classList.remove('active');
  });


	nextPlayerEl.classList.add('active');//다음 플레이어 활성화

	currentPlayer = num;//현재 플레이어 변경
}

//점수변경
function scoreChange(randNum, callback){

	playerScore = score[currentPlayer - 1];//현재플레이어 점수
	score[currentPlayer - 1] = playerScore + randNum;//현재플레이어 점수에 랜덤숫자를 더하고 배열에 추가

	//HTML 현재 플레이어 점수 변경
	const currentPlayerCountEl = document.querySelector('.player_group li.active .count');
	currentPlayerCountEl.innerText = score[currentPlayer - 1];

	//현재 점수가 100보다 크거나 같으면
	if(score[currentPlayer - 1] >= 100){	
		delay(function(){//딜레이 함수에 이름없는 함수 전달
			callback(currentPlayer);//전달받은 함수 실행
		},300);

	}else{
		buttonUnlock();
	}

}

function delay(callback, time){
	setTimeout(function(){//time 시간 이후 실행
		callback();//전달받은 함수 실행
	},time);
}

//처음 실행 함수
function pigdiceStart(){
	newGame();

	const btnRollDiceEl = document.querySelector('.roll_dice'); 
	btnRollDiceEl.addEventListener('click', function(event){
			buttonLock(event.target);//버튼 비활성화 버튼에 현재 클릭된 버튼 전달
			randNum = rand();

			const diceEl = document.querySelector('.dice span');
			diceEl.innerText = randNum;//HTML 주사위 랜덤숫자 넣기

			if(randNum === 1){
				delay(function(){
					//딜레이 함수 작동 후 내용실행
					alert('숫자1 다음 플레이어 턴');
					playTurnChange();
				},300);
			}else{
				delay(function(){
					//딜레이 함수 작동 후 내용실행
					scoreChange(randNum, function(playerNum){//점수변경 함수에 랜덤숫자, 추가 실행함수 전달
						alert(playerNum + '번 플레이어 승리!');
						buttonUnlock();
						newGame();
					});
				},200);
			}

	});

	//hold버튼 클릭시 실행
	const btnHoldEl = document.querySelector('.hold'); 
	btnHoldEl.addEventListener('click', function(){
		delay(function(){
			playTurnChange('hold');
		},300);
	});

	//new game 클릭시 실행
	const btnNewGameEl = document.querySelector('.new_game'); 
	btnNewGameEl.addEventListener('click', function(){
		newGame();
	});

}


pigdiceStart();   