import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import React from "react";
import paths from "../../routers/paths/paths";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../store";
import Modal from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  const location = useLocation();
  const { isLoading } = useAppSelector((state) => state.uiStore);

  return (
    <ContainerStyled>
      {isLoading && <Loader />}
      {location.pathname === paths.login || <Header />}
      <Modal />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
