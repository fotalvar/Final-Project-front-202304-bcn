import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 180px;
  height: 55px;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.normal};
  border-radius: 50px;
  border: none;
  box-shadow: ${(props) => props.theme.shadows.button};
  background-color: ${(props) => props.theme.colors.secondary};
`;

export default ButtonStyled;
