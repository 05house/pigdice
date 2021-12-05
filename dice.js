let currentSocre
let totalScore
let total

function randice(){
  return Math.floor(6*Math.random())+1;
}

function palaying(){
  currentSocre = randice();
  if(currentSocre !== 1){
    totalScore = currentSocre += randice();
    total = totalScore += randice();
    console.log(`합은${total}입니다.`);
  }
  else{
    console.log("다음 기회에");
  }
};

palaying();
