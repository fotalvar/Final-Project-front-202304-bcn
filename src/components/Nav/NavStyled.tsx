import styled from "styled-components";

const NavStyled = styled.nav`
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 105px;
      width: 90px;
      border: 1px solid rgb(255 255 255 / 10%);
    }
  }
`;

export default NavStyled;
