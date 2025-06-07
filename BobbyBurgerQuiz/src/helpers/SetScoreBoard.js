export function SetScoreBoard(newScore) {
  const scoreBoardRaw = localStorage.getItem('scoreBoard')
  try {
    if(scoreBoardRaw){
      let scoreBoard = JSON.parse(localStorage.getItem('scoreBoard'))
      if(scoreBoard.length > 4) {
        console.log("ITS TOO BIG");
        
        scoreBoard.shift()
      }
      scoreBoard.push(newScore)
      localStorage.setItem('scoreBoard', JSON.stringify(scoreBoard))
    } else {
      const newScoreArray = []
      newScoreArray.push(newScore)
      localStorage.setItem('scoreBoard', JSON.stringify(newScoreArray))
    }
  } catch (error) {
    console.error(error)
    console.log('localStorage curruption clearing scoreBoard');
    localStorage.clear('scoreBoard')
  }

  
}