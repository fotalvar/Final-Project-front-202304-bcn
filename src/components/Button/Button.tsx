import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  actionOnClick?: () => void;
  className: string;
  type?: string;
  isDisabled?: boolean;
}

const Button = ({
  text,
  actionOnClick,
  className,
  isDisabled,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      onClick={actionOnClick}
      className={className}
      disabled={isDisabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
