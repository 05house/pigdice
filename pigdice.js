let score = 0;
let randNum = 0;

function rand(){
	return Math.trunc(Math.random()*6)+1;
}

function reset(){
	score = 0;
	randNum = 0;
}

function pigdiceStart(){
	while(randNum !== 1){
		randNum = rand();

		if(randNum === 1){
			console.log("숫자1, 다음 플레이어 턴");
			reset();
		}else if(score >= 100){
			console.log("플레이어 승리!!!");
			reset();
			break;
		}else{
			score += randNum;
			console.log(score);
		}
	}
}

pigdiceStart();