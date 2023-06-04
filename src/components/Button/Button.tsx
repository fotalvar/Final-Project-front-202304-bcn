import ButtonStyled from "./ButtonStyled";

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
    <ButtonStyled onClick={actionOnClick} className={className}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
