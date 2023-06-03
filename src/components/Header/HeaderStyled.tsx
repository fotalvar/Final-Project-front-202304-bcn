import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  min-width: 320px;
  width: 100vw;
  height: 105px;
  max-width: 600px;
  background: linear-gradient(rgba(98, 96, 138, 0) 0%, #62608ae5 72.48%);
  backdrop-filter: blur(5px);
  border-radius: 0px 0px 10px 10px;
  border-bottom: 2px solid rgb(255 255 255 / 29%);
  border-top: none;
`;

export default HeaderStyled;
