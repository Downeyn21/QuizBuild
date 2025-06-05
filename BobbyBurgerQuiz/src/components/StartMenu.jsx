import { useEffect, useState } from "react";

function StartMenu({setQuizState}) {
  const [prevScores, setPrevScores] = useState([])


  function handleStartQuiz() {
    setQuizState("quiz")
  }

  useEffect(() => {
    const scoreBoard = localStorage.getItem('scoreBoard')
    if(scoreBoard) {
      setPrevScores(JSON.parse(localStorage.getItem('scoreBoard')))
    }
  },[])

  return ( 
    <>
      <div className="contentWrapper">
        <div className="headWrapper">
          <h1>Do you know Bob's Burgers?</h1>
          <h3>Take the test to find out!</h3>
        </div>
        <div className="mainWrapper">
          <div className="scoreContainer">
            <span>Previous Scores:</span>
            {prevScores.length > 0 ? (
            <div>
              {prevScores.map((score, index) => (
                <div key={index}>{score}/100</div>
              ))}
            </div>
            ) : (
              <span>No Prevous Scores</span>
            )}
          </div>
          <button onClick={handleStartQuiz}>Start</button>
        </div>
      </div>
    </>
  );
}

export default StartMenu;