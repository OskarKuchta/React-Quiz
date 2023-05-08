import PropTypes from "prop-types";

const Answer = (props) => {
  const getValue = () => {
    console.log(props.val);
  };
  return (
    <>
      <button onClick={getValue} className="btn option">
        {props.val}
      </button>
    </>
  );
};

Answer.propTypes = {
  val: PropTypes.string.isRequired,
};
export default Answer;
