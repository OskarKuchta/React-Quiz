import { useState } from "react";
import Submit from "./submit";

const Answer = () => {
  const [value, setValue] = useState("");
  const getValue = (event) => {
    setValue(event.target.innerHTML);
  };
  const checkAnswer = () => {
    console.log(value)
  }
  return (
    <>
      <button onClick={getValue} className="btn option">
        1
      </button>
      <button onClick={getValue} className="btn option">
        2
      </button>
      <button onClick={getValue} className="btn option">
        3
      </button>
      <button onClick={getValue} className="btn option">
        4
      </button>
      <Submit onClick={checkAnswer}/>
    </>
  );
};
export default Answer;
