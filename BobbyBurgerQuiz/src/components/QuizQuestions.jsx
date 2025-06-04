import { questions } from "../helpers/Questions";
import { useState } from "react";

function QuizQuestions({setQuizState}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  function handleQuestionSubmit(e) {
    e.preventDefault()
    if(currentQuestion === questions.length - 1){
      setQuizState("end")
    } else {
      setCurrentQuestion(currentQuestion + 1)
      
    }

  }

  return ( 
    <>
      <div>
        <div>{questions[currentQuestion].prompt}</div>
        <form onSubmit={handleQuestionSubmit}>
          <div>
            <input type="radio" id="optionA" name="options"/>
            <label>{questions[currentQuestion].a}</label>
          </div>
          <div>
            <input type="radio" id="optionB" name="options"/>
            <label>{questions[currentQuestion].b}</label>
          </div>
          <div>
            <input type="radio" id="optionC" name="options"/>
            <label>{questions[currentQuestion].c}</label>
          </div>
          <div>
            <input type="radio" id="optionD" name="options"/>
            <label>{questions[currentQuestion].d}</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default QuizQuestions;