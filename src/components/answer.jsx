import { useRef } from "react";

export default function Answers({
  onSelect,
  selectedAnswer,
  answerState,
  answers,
}) {
  const shuffledAnswers = useRef();
  // shuffle the answers
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort((a, b) => Math.random() - 0.5);
  }
  console.log(selectedAnswer);

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer.text === answer;

        let cssClass = "";

        if (answerState !== "" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={selectedAnswer.text !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
