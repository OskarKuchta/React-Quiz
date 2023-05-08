import PropTypes from "prop-types";

const Answer = (props) => {
  const getValue = (event) => {
    console.log(event.target.innerHTML);
  };

  return (
    <button onClick={getValue} className="btn option">
      {props.option}
    </button>
  );
};

Answer.propTypes = {
  option: PropTypes.string.isRequired,
};

export default Answer;
