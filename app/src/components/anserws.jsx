import { useState } from "react";
import Submit from "./submit";
import questions from "./questions";

const Answer = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const getValue = (event) => {
    setValue(event.target.innerHTML);
  };
  const checkAnswer = () => {
    console.log(value);
    console.log(message);
    if (value.trim() == "") {
      return;
    }
    if (value == "Paris") {
      setMessage("Correct answer");
    }
    setMessage("Incorrect answer");
  };
  return (
    <>
      <button onClick={getValue} className="btn option">
        {questions[0].options[0]}
      </button>
      <button onClick={getValue} className="btn option">
        {questions[0].options[1]}
      </button>
      <button onClick={getValue} className="btn option">
        {questions[0].options[2]}
      </button>
      <button onClick={getValue} className="btn option">
        {questions[0].options[3]}
      </button>
      <Submit onClick={checkAnswer} />
      {message ? <p>{message}</p> : ""}
    </>
  );
};
export default Answer;
