import PropTypes from "prop-types";

const Answer = (props) => {
  return (
    <>
      <button className="option">{props.val}</button>
    </>
  );
};

Answer.propTypes = {
  val: PropTypes.string.isRequired,
};
export default Answer;
