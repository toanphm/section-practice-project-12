import CompleteIcon from "../assets/quiz-complete.png";
import QUESTIONS_DATA from "../questions";

export default function CompletedQuiz({ answers }) {
  const skippedAnswer = answers.filter((answer) => answer === null).length;
  const correctAnswer = answers.filter(
    (answer, index) => answer === QUESTIONS_DATA[index].answers[0]
  ).length;
  const totalQuestion = QUESTIONS_DATA.length;

  const skippedPercent = Math.round((skippedAnswer / totalQuestion) * 100);
  const correctPercent = Math.round((correctAnswer / totalQuestion) * 100);
  const wrongPercent = 100 - skippedPercent - correctPercent;

  return (
    <div id="summary">
      <img src={CompleteIcon} alt="Completed icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <p className="number">{skippedPercent}%</p>
          <p className="text">Skipped</p>
        </p>
        <p>
          <p className="number">{correctPercent}%</p>
          <p className="text">Correct</p>
        </p>
        <p>
          <p className="number">{wrongPercent}%</p>
          <p className="text">Wrong</p>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (
            answer !== null &&
            answer === QUESTIONS_DATA[index].answers[0]
          ) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS_DATA[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
