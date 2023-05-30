import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  const isLogged = true;
  return (
    <>
      {isLogged && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
