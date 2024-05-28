import { useCallback, useState } from "react";
import QUESTIONS_DATA from "../questions";
import Question from "./Question";
import CompletedQuiz from "./CompletedQuiz";

export default function Quiz() {
  const [answer, setAnswer] = useState([]);

  const currentQuestionIndex = answer.length;

  const handleMakeAnswer = useCallback(function handleMakeAnswer(answer) {
    setAnswer((prev_answer) => [...prev_answer, answer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleMakeAnswer(null);
  }, [handleMakeAnswer]);

  if (currentQuestionIndex === QUESTIONS_DATA.length) {
    return <CompletedQuiz answers={answer} />;
  }

  return (
    <div id="quiz">
      <h2>Question number: {currentQuestionIndex + 1}</h2>
      <Question
        key={currentQuestionIndex}
        answers={answer}
        onSelect={handleMakeAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}
