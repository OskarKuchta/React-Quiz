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
  let submitBtn = document.querySelector(".submit");
  const getValue = (event) => {
    setValue(event.target.innerHTML);
  };
  const checkAnswer = () => {
    let info = document.querySelector(".message");
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
      info.style.display = "inline-block";
    } else {
      setCurrent(current + 1);
      setValue("");
      submitBtn.innerHTML = "Confirm";
      submitBtn.blur();
      info.style.display = "none";
    }
  };
  return (
    <main className="container">
      {current < questions.length ? (
        <>
          <Question val={questions[current].question} />
          <Button onClick={getValue}>{questions[current].options[0]}</Button>
          <Button onClick={getValue}>{questions[current].options[1]}</Button>
          <Button onClick={getValue}>{questions[current].options[2]}</Button>
          <Button onClick={getValue}>{questions[current].options[3]}</Button>
          <Submit onClick={checkAnswer} id="next-question" />
          {message ? <p className="message">{message}</p> : ""}
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
