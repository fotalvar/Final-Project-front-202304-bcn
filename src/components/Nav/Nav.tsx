import React from "react";
import NavStyled from "./NavStyled";
import { NavLink } from "react-router-dom";

const Nav = (): React.ReactElement => {
  return (
    <NavStyled>
      <ul className="nav">
        <li className="nav__item">
          <NavLink to="/home">
            <img src="icons/home.svg" alt="Home page" width="30" height="30" />
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/logout">
            <img src="icons/logout.svg" alt="Log out" width="30" height="30" />
          </NavLink>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
