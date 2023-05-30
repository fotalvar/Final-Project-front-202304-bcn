import Nav from "../Nav/Nav";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <Nav />
      <img
        src="../images/logo.svg"
        alt="Teams Impact logo"
        width="85"
        height="45"
      />
    </HeaderStyled>
  );
};

export default Header;
