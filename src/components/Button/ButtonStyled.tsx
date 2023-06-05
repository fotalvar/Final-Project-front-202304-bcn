import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 180px;
  height: 55px;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.normal};
  border-radius: 50px;
  border: none;
  box-shadow: 0px 6px 6px #0000003f;

  &__login {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.mainLight};
    transition: 0.5s;
  }
  &__load-more {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.mainLight};
    transition: 0.5s;
  }
`;

export default ButtonStyled;
