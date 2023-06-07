import styled from "styled-components";

const LoaderStyled = styled.div`
  background-color: #00000083;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 15;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  animation-delay: 0.5s;
  animation: fadein 0.3s linear;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  .loader {
    width: 100px;
    height: 100px;
    background: linear-gradient(
      165deg,
      #fff 0%,
      #dcdcdc 40%,
      #aaaaaa 98%,
      #0a0a0a 100%
    );
    border-radius: 50%;
    position: relative;
    display: flex;
    position: absolute;
    z-index: 3;
    top: 30vh;
    justify-content: center;
    align-items: center;
  }

  .loader:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border-bottom: 0 solid #ffffff05;
    box-shadow: 0 -10px 20px 20px #ffffff40 inset,
      0 -5px 15px 10px #ffffff50 inset, 0 -2px 5px #ffffff80 inset,
      0 -3px 2px #ffffffbb inset, 0 2px 0px #ffffff, 0 2px 3px #ffffff,
      0 5px 5px #ffffff90, 0 10px 15px #ffffff60, 0 10px 20px 20px #ffffff40;
    filter: blur(3px);
    animation: 2s rotate linear infinite;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
    transition: 0.5s;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default LoaderStyled;
