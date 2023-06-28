import React from "react";

interface FinishedProps {
  correct: number;
  all: number;
}

const Finished: React.FC<FinishedProps> = (props) => {
  const percent: number = Number(
    ((props.correct / props.all) * 100).toFixed(2)
  );
  const reloadPage: () => void = () => {
    location.reload();
  };
  return (
    <>
      <h2 className="header finish">
        You complete quiz with {props.correct} / {props.all} ( {percent}% )
        correct answers!
      </h2>
      {percent <= 40 ? (
        <h2 className="header">Don't give up, next time will be better!</h2>
      ) : null}
      {percent <= 66 && percent > 40 ? (
        <h2 className="header">Nice score, your knowledge is great</h2>
      ) : null}
      {percent > 66 ? (
        <h2 className="header">Your knowledge is awesome, good job!</h2>
      ) : null}
      <button className="btn submit" onClick={reloadPage}>
        Start quiz again
      </button>
    </>
  );
};

export default Finished;
