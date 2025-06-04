function StartMenu({setQuizState}) {

  const scores = [75, 20, 14, 97, 28]

  function handleStartQuiz() {
    setQuizState("quiz")
  }

  return ( 
    <>
      <div className="contentWrapper">
        <div className="headWrapper">
          <h1>Do you think you are the bob burger??</h1>
        </div>
        <div className="mainWrapper">
          <span>Prevous Scores</span>
          <ul>
            {scores.map((score, index) => (
              <li key={index}>{score}</li>
            ))}
          </ul>
          <button onClick={handleStartQuiz}>Start</button>
        </div>
      </div>
    </>
   );
}

export default StartMenu;