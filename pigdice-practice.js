function rollDice(){
	return Math.floor(Math.random()*6)+1;
}

let score = 0

function gameStart() {
	while (score < 100) {
		diceNum = rollDice()
		score += diceNum
		if (diceNum === 1) {
			score = 0;
			console.log("주사위값 : " + diceNum)
			console.log("1이 나와서 주사위가 초기화 되었습니다")
			break
		} else {
				console.log("주사위값 : " + diceNum)
				console.log("점수 : " + score)
		}
	}
	if (score >= 100) {
		console.log("달성. 승리했습니다!")
	}
}

gameStart()