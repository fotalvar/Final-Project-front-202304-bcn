import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import React from "react";
import paths from "../../routers/paths/paths";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  const location = useLocation();

  return (
    <ContainerStyled>
      <Loader />
      {location.pathname === paths.login || <Header />}
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
