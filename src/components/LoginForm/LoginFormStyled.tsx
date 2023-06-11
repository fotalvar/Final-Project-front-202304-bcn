import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: grid;
  place-items: center;
  gap: 30px;
  align-content: center;
  animation: ${(props) => props.theme.animation.page};
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  .login-form {
    &__controller {
      background-color: ${(props) => props.theme.colors.mainLight};
      border-radius: 10px;
      border: none;
      width: 280px;
      height: 55px;
      padding: 15px;
      box-shadow: ${(props) => props.theme.shadows.button};
      font-size: ${(props) => props.theme.fontSizes.small};

      &:focus {
        outline: solid 3px ${(props) => props.theme.colors.secondary};
      }
    }

    &__button {
      width: 180px;
      height: 55px;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.mainLight};
      text-transform: uppercase;
      border: none;
      font-size: ${(props) => props.theme.fontSizes.normal};
      box-shadow: ${(props) => props.theme.shadows.button};
      border-radius: 50px;
      transition: 0.5s;

      &:disabled {
        background-color: #8e90a67f;
        color: ${(props) => props.theme.colors.primaryDark};
        transition: 0.5s;
      }
    }
  }

  @keyframes fade-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default LoginFormStyled;
