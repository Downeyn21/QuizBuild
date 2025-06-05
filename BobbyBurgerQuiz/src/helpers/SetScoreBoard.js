export function SetScoreBoard(newScore) {
  const scoreBoardRaw = localStorage.getItem('scoreBoard')
  try {
    if(scoreBoardRaw){
      let scoreBoard = JSON.parse(localStorage.getItem('scoreBoard'))
      scoreBoard.push(newScore)
      console.log('array => ', scoreBoard);
      localStorage.setItem('scoreBoard', JSON.stringify(scoreBoard))
      console.log("scoreBoard Exists we will push on this");
      
    } else {
      const newScoreArray = []
      newScoreArray.push(newScore)
      console.log('array => ', newScoreArray);
      
      localStorage.setItem('scoreBoard', JSON.stringify(newScoreArray))
      console.log('new array pushed');
    }

    const parsedBoard = JSON.parse(localStorage.getItem('scoreBoard'))
    console.log('array result => ', parsedBoard);
    console.log(Array.isArray(parsedBoard));
    
  } catch (error) {
    console.error(error)
    console.log('localStorage curruption clearing scoreBoard');
    localStorage.clear('scoreBoard')
  }

  
}