import { SetScoreBoard } from "../helpers/SetScoreBoard";

function EndMenu({setQuizState, scoreState, setScoreState}) {
  function handleReset() {
    SetScoreBoard(scoreState)
    setScoreState(0)
    setQuizState('menu')
  }

  return ( 
    <>
    <div className="endMenuContainer">
      <h2>Congrats!</h2>
      <div>
        <span>Your Score: {scoreState}</span>
      </div>
      <button 
      onClick={() => {handleReset()}}
      >
        Take Quiz Again?
      </button>
    </div>
    </>
   );
}

export default EndMenu;