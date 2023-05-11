import { useState } from "react";
import Submit from "./submit";
import questions from "./questions";
import Question from "./question";
import Finished from "./complete-quiz";
import Button from "./Button";
const Quiz = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [effect, setEffect] = useState("effect");
  let submitBtn = document.querySelector(".submit");
  const btnClass = `btn option ${effect}`;
  const getValue = (event) => {
    setValue(event.target.innerHTML);
  };
  const checkAnswer = () => {
    if (value.trim() == "") {
      return;
    }
    if (submitBtn.innerHTML == "Confirm") {
      if (value == questions[current].answer) {
        setMessage("Correct answer");
        setCorrect(correct + 1);
      } else {
        setMessage(
          `Incorrect answer, correct answer is ${questions[current].answer}`
        );
      }
      submitBtn.blur();
      submitBtn.innerHTML = "Next question";
      if (current == questions.length - 1) {
        submitBtn.innerHTML = "Check your score";
      }
      setAnswer(true);
      setEffect("");
    } else {
      setCurrent(current + 1);
      setValue("");
      submitBtn.innerHTML = "Confirm";
      submitBtn.blur();
      setAnswer(false);
      setEffect("effect");
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
          <Submit onClick={checkAnswer} id="next-question" />
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
