const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn option">
      {children}
    </button>
  );
};

export default Button;
