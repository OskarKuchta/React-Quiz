interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
