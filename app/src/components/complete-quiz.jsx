const Finished = (props) => {
  const percent = (props.correct / props.all).toFixed(2) * 100;
  const reloadPage = () => {
    location.reload();
  };
  return (
    <>
      <h2 className="header finish">
        You complete quiz with {props.correct} / {props.all} ( {percent}% )
        correct answers!
      </h2>
      {percent < 40 ? (
        <h2 className="header">Don't give up, next time will be better!</h2>
      ) : null}
      {percent <= 66 ? <h2 className="header">Nice score, your knowledge is great</h2> : null}
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
