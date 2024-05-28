import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimout, ...props }) {
  const [timeLapse, setTimeLapse] = useState(timeout);
  useEffect(() => {
    // console.log("Set Timeout");
    const timeoutId = setTimeout(onTimout, timeout);
    return () => {
      // console.log("--------Cleared Timeout");
      clearTimeout(timeoutId);
    };
  }, [onTimout, timeout]);

  useEffect(() => {
    // console.log("Set Interval");
    const intervalId = setInterval(() => {
      setTimeLapse((prev) => prev - 10);
    }, 10);

    return () => {
      // console.log("--------Cleared Interval");
      clearInterval(intervalId);
    };
  }, []);
  return (
    <progress id="question-time" max={timeout} value={timeLapse} {...props} />
  );
}
