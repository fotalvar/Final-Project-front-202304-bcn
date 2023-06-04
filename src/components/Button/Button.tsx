interface ButtonProps {
  text: string;
  actionOnClick?: () => void;
  className: string;
  type?: string;
}

const Button = ({
  text,
  actionOnClick,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <button onClick={actionOnClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
