import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  display: grid;
  place-items: center;
  text-align: center;
  color: #ffffff7f;
  text-shadow: 0px 4px 4px #0000003f;
  font-size: ${(props) => props.theme.fontSizes.medium};
  width: 250px;
  height: fit-content;
  margin-top: 20vh;
`;

export default NotFoundPageStyled;
