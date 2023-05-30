import Nav from "../Nav/Nav";
import HeaderStyled from "./HeaderStyles";

const Header = (): React.ReactElement => {
  return (
    <>
      <HeaderStyled>
        <Nav />
        <img
          src="images/logo.svg"
          alt="Teams Impact logo"
          width="85"
          height="45"
        />
      </HeaderStyled>
    </>
  );
};

export default Header;
