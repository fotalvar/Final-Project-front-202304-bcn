import React from "react";
import NavStyled from "./NavStyled";
import { NavLink, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import paths from "../../routers/paths/paths";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const Nav = (): React.ReactElement => {
  const { removeItemLocalStorage } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutOnClick = (): void => {
    removeItemLocalStorage("token");
    dispatch(logoutUserActionCreator);
    navigate(paths.login);
  };

  return (
    <NavStyled>
      <ul className="nav">
        <li className="nav__item">
          <NavLink to="/user/home">
            <img
              src="../images/icons/home.svg"
              alt="Home page"
              width="30"
              height="30"
            />
          </NavLink>
        </li>
        <li className="nav__item">
          <button onClick={logOutOnClick} className="nav__logout_button">
            Logout
            <img
              src="../images/icons/logout.svg"
              alt="Log out"
              width="30"
              height="30"
            />
          </button>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
