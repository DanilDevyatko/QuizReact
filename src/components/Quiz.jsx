import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions.js"
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";



export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizQuestionsNumber = QUESTIONS.length;
  const quizIsOver = activeQuestionIndex === quizQuestionsNumber;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers(prevUsersAnswers => {
        return [...prevUsersAnswers, selectedAnswer];
      });
    }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

  if (quizIsOver) {
    return (
      <Summary userAnswers={userAnswers}/>
    )
  }
  
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  )
}