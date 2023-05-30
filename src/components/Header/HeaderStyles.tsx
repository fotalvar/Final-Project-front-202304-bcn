import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  min-width: 320px;
  width: 100vw;
  height: 105px;
  max-width: 600px;
  background: linear-gradient(
    rgba(98, 96, 138, 0) 0%,
    rgba(98, 96, 138, 0.9) 72.48%
  );
  backdrop-filter: blur(5px);
  border-radius: 0px 0px 10px 10px;
  border: 1px solid rgba(255, 255, 255, 0.181);
`;

export default HeaderStyled;
