
import { useState } from 'react'
import './App.css'
import StartMenu from './components/StartMenu'
import QuizQuestions from './components/QuizQuestions'
import EndMenu from './components/EndMenu'

function App() {
  const [quizState, setQuizState] = useState("menu")

  // function handleChangeState() {
  //   if(quizState === "menu") {
  //     setQuizState("quiz")
  //   } else if(quizState === "quiz") {
  //     setQuizState("end")
  //   } else if(quizState === "end") {
  //     setQuizState("menu")
  //   }
  // }

  return (
    <>
      <div className='titleWrapper'>
        <img src="/imgs/Bob's_Burgers_logo.png" alt="Bob's Burgers" />
      </div>
      <div className='contentContainer'>
      {quizState === "menu" && <StartMenu setQuizState={setQuizState}  />}
      {quizState === "quiz" && <QuizQuestions setQuizState={setQuizState} />}
      {quizState === "end" && <EndMenu />}
      </div>
    </>
  )
}

export default App
