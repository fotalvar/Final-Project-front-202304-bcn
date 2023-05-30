import HeaderStyled from "./HeaderStyles";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="images/logo.svg"
        alt="Teams Impact logo"
        width="85"
        height="45"
      />
    </HeaderStyled>
  );
};

export default Header;
