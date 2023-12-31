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
  const { isLoading, isVisible } = useAppSelector((state) => state.uiStore);

  return (
    <>
      <ContainerStyled>
        {location.pathname === paths.login || <Header />}
        <Outlet />
      </ContainerStyled>
      {isLoading && <Loader />}
      {isVisible && <Modal />}
    </>
  );
};

export default Layout;
