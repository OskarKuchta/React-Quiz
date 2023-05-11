const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn option effect">
      {children}
    </button>
  );
};

export default Button;
