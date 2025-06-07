import { questions } from "../helpers/Questions";
import { useState } from "react";

function QuizQuestions({setQuizState, setScoreState, scoreState}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)

  function handleQuestionSubmit(e) {
    e.preventDefault()
    
    if(selectedOption == questions[currentQuestion].answer) {
        setScoreState(scoreState + 10)
      }
    if(currentQuestion === questions.length - 1){
      setQuizState("end")
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
    }

  }

  return ( 
    <>
      <div className="quizWrapper">
        <h2>{questions[currentQuestion].prompt}</h2>
        <form onSubmit={handleQuestionSubmit}>
          <div className="formWrapper">
            <div 
            onClick={() => {setSelectedOption('a')}}
            className="optionContainer"
            >
              <input 
              type="radio"
              name="options"
              value={'a'}
              checked={selectedOption === 'a'}
              required
              />
              <label>{questions[currentQuestion].a}</label>
            </div>
            <div
            onClick={() => {setSelectedOption('b')}}
            className="optionContainer"
            >
              <input 
              type="radio"
              name="options"
              value={'b'}
              checked={selectedOption === 'b'}
              required
              />
              <label>{questions[currentQuestion].b}</label>
            </div>
            <div
            onClick={() => {setSelectedOption('c')}}
            className="optionContainer"
            >
              <input
              type="radio"
              name="options"
              value={'c'}
              checked={selectedOption === 'c'}
              required
              />
              <label>{questions[currentQuestion].c}</label>
            </div>
            <div
            onClick={() => {setSelectedOption('d')}}
            className="optionContainer"
            >
              <input 
              type="radio"
              name="options"
              value={'d'}
              checked={selectedOption === 'd'}
              required
              />
              <label>{questions[currentQuestion].d}</label>
            </div>
          </div>
          <div className="quizButtonWrapper">
            <button 
            type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuizQuestions;