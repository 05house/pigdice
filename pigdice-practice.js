const button = document.querySelector('button')
const scoreText = document.querySelector('.score')

function rollDice (){
	return Math.floor(Math.random()*6)+1;
}

let score = 0

function gameStart () {
	diceNum = rollDice ()
	button.innerText = "주사위 굴리기"
	if (diceNum === 1) {
		score = 0;
		console.log("주사위값 : " + diceNum)
		scoreText.innerText = "1이 나와서 주사위가 초기화 되었습니다"
		button.innerText = " 다시 시작하기"
	} else if (score >= 100) {
		console.log("달성. 승리했습니다!")
		alert('100점 달성! 승리했습니다!!')
		button.innerText = " 다시 시작하기"
		score = 0
	} else {
		score += diceNum
		console.log("주사위값 : " + diceNum)
		console.log("점수 : " + score)
		scoreText.innerText = `주사위값 : ${diceNum} / 총점 : ${score}` 
	}
}

button.addEventListener('click', gameStart)