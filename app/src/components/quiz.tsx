import { useRef, useState } from "react";
import Submit from "./submit";
import questions from "./questions";
import Question from "./question";
import Finished from "./complete-quiz";
import Button from "./Button";

const Quiz = () => {
  const [value, setValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [current, setCurrent] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const [answer, setAnswer] = useState<boolean>(false);
  const [effect, setEffect] = useState<string>("effect");
  const [submitEffect, setSubmitEffect] = useState<string>("submitEffect");
  const submitBtn: React.MutableRefObject<HTMLButtonElement | null> =
    useRef(null);
  const btnClass: string = `btn option ${effect}`;
  const submitClass: string = `btn submit ${submitEffect}`;
  const getValue = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setValue(target.innerHTML);
  };
  const checkAnswer = () => {
    if (value.trim() == "") {
      return;
    }
    if (submitBtn.current.innerHTML == "Confirm") {
      if (value == questions[current].answer) {
        setMessage("Correct answer");
        setCorrect(correct + 1);
      } else {
        setMessage(
          `Incorrect answer, correct answer is ${questions[current].answer}`
        );
      }
      submitBtn.current.blur();
      submitBtn.current.innerHTML = "Next question";
      if (current == questions.length - 1) {
        submitBtn.current.innerHTML = "Check your score";
      }
      setAnswer(true);
      setEffect("");
      setSubmitEffect("");
      setTimeout(() => {
        setSubmitEffect("submitEffect");
      }, 1000);
    } else {
      setCurrent(current + 1);
      setValue("");
      submitBtn.current.innerHTML = "Confirm";
      submitBtn.current.blur();
      setAnswer(false);
      setEffect("effect");
      setSubmitEffect("");
      setTimeout(() => {
        setSubmitEffect("submitEffect");
      }, 2000);
    }
  };
  return (
    <main className="container">
      {current < questions.length ? (
        <>
          <Question val={questions[current].question} />
          <Button className={btnClass} onClick={getValue}>
            {questions[current].options[0]}
          </Button>
          <Button className={btnClass} onClick={getValue}>
            {questions[current].options[1]}
          </Button>
          <Button className={btnClass} onClick={getValue}>
            {questions[current].options[2]}
          </Button>
          <Button className={btnClass} onClick={getValue}>
            {questions[current].options[3]}
          </Button>
          <Submit
            onClick={checkAnswer}
            ref={submitBtn}
            className={submitClass}
          />
          {answer ? <p className="message">{message}</p> : null}
        </>
      ) : null}
      {current == questions.length ? (
        <>
          <Finished correct={correct} all={questions.length} />
        </>
      ) : null}
    </main>
  );
};
export default Quiz;
