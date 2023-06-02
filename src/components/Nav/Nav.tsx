import React from "react";
import NavStyled from "./NavStyled";
import { NavLink, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import paths from "../../routers/paths/paths";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const Nav = (): React.ReactElement => {
  const { removeToken } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutOnClick = (): void => {
    removeToken("token");
    dispatch(logoutUserActionCreator);
    navigate(paths.root);
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
          <button className="nav__logout_button" onClick={logOutOnClick}>
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