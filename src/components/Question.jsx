import { useState } from "react";
import Answers from "./answer";
import QuestionTimer from "./questionTimer";
import QUESTIONS_DATA from "../questions";

export default function Question({ onSelect, onSkip, answers }) {
  const [selectedAnswer, setSelectedAnswer] = useState({
    text: "",
    isCorrect: null,
  });

  const currentQuestionIndex = answers.length;

  function handleMakeAnswer(answer) {
    setSelectedAnswer({
      text: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setSelectedAnswer({
        text: answer,
        isCorrect: QUESTIONS_DATA[currentQuestionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelect(answer);
      }, 1000);
    }, 1000);
  }

  let time = 15000;
  let answerState = "";
  if (selectedAnswer.text !== "" && selectedAnswer.isCorrect !== null) {
    answerState = selectedAnswer.isCorrect ? "correct" : "wrong";
    time = 1000;
  } else if (selectedAnswer.text) {
    answerState = "selected";
    time = 1000;
  }

  return (
    <>
      <QuestionTimer
        key={time}
        timeout={time}
        onTimout={selectedAnswer.text === "" ? onSkip : null}
        classNames={answerState}
      />
      <div id="question">
        <h2>{QUESTIONS_DATA[currentQuestionIndex].text}</h2>
        <Answers
          onSelect={handleMakeAnswer}
          answers={QUESTIONS_DATA[currentQuestionIndex].answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
        />
      </div>
    </>
  );
}
