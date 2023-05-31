import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";

const Layout = (): JSX.Element => {
  return (
    <ContainerStyled>
      <Header />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
