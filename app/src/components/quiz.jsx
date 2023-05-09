import { useState } from "react";
import Submit from "./submit";
import questions from "./questions";
import Question from "./question";

const Quiz = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const submitBtn = document.querySelector(".submit");
  const getValue = (event) => {
    setValue(event.target.innerHTML);
  };
  const checkAnswer = () => {
    console.log(value);
    console.log(message);
    if (value.trim() == "") {
      return;
    }
    if (value == questions[current].answer) {
      setMessage("Correct answer");
      setCorrect(correct + 1);
    } else {
      setMessage("Incorrect answer");
    }
    setCurrent(current + 1);
    setValue("");
    submitBtn.blur();
  };
  console.log(correct);
  return (
    <main className="container">
      {current < 3 ? (
        <>
          <Question val={questions[current].question} />
          <button onClick={getValue} className="btn option">
            {questions[current].options[0]}
          </button>
          <button onClick={getValue} className="btn option">
            {questions[current].options[1]}
          </button>
          <button onClick={getValue} className="btn option">
            {questions[current].options[2]}
          </button>
          <button onClick={getValue} className="btn option">
            {questions[current].options[3]}
          </button>
          <Submit onClick={checkAnswer} />
          {message ? <p className="message">{message}</p> : ""}
        </>
      ) : null}
    </main>
  );
};
export default Quiz;
