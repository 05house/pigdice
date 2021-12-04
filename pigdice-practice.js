let score = 0;
let randNum = 0;
let totalPlayer = 5;
let player = 1;

function rand(){
	return Math.trunc(Math.random()*6)+1;
}

function scoreReset(){
	score = 0;
	randNum = 0;
}

function pigdiceStart(){
	while(randNum !== 1){
		randNum = rand();

		if(randNum === 1){
			console.log(player + "번 플레이어 숫자1, 다음 플레이어 턴");
			scoreReset();
			
			if(player < totalPlayer){
				player++;
			}else{
				player = 1;
			}

		}else if(score >= 100){
			console.log(player + "번 플레이어 승리!!!");
			scoreReset();
			player = 1;
			break;
		}else{
			score += randNum;
			console.log(player + "번 플레이어 숫자" + randNum + " 합계:" + score);
		}
	}
}

pigdiceStart();  