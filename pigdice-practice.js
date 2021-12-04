function rollDice(){
	return Math.floor(Math.random()*6)+1;
}

function gameStart() {
	for (score=0; score < 100; score += diceNum) {
	diceNum = rollDice()
	console.log("점수" + score)
	console.log("주사위값" + diceNum)
	}
	if (score >= 100) {
		console.log(score +"달성. 승리했습니다!")
	}
}

gameStart()