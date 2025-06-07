
import { useState } from 'react'
import './App.css'
import StartMenu from './components/StartMenu'
import QuizQuestions from './components/QuizQuestions'
import EndMenu from './components/EndMenu'

function App() {
  const [quizState, setQuizState] = useState("menu")
  const [scoreState, setScoreState] = useState(0)

  function handleLocalReset() {
    localStorage.clear('scoreBoard')
    console.log('cleared storage =>', localStorage.getItem('scoreBoard'));
    
  }

  return (
    <>
      <div className='titleWrapper'>
        <img src="/imgs/Bob's_Burgers_logo.png" alt="Bob's Burgers" />
      </div>
      <div className='contentContainer'>
      {quizState === "menu" && <StartMenu 
      setQuizState={setQuizState}
      />}
      {quizState === "quiz" && <QuizQuestions 
      setQuizState={setQuizState}
      scoreState={scoreState}
      setScoreState={setScoreState} 
      />}
      {quizState === "end" && <EndMenu 
      setQuizState={setQuizState}
      scoreState={scoreState}
      setScoreState={setScoreState}
      />}
      </div>
      {/* <div>
        score :{scoreState}
        <button onClick={() => {handleLocalReset()}}>reset localStorage</button>
      </div> */}
    </>
  )
}

export default App
