import { useState } from "react";
import QUESTIONS from "../questions.js"

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  console.log(QUESTIONS);

  const activeQuestionIndex = userAnswer.length;

  return (
    <>
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map(answer => (
          <li key={answer} className="answer">{answer}</li>
        ))}
      </ul>
    </div>
    </>
  )
}