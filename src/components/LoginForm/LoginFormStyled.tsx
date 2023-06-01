import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .login-form {
    &__controller {
      background-color: ${(props) => props.theme.colors.mainLight};
      border-radius: 10px;
      border: none;
      width: 280px;
      height: 55px;
      padding: 15px;
      filter: drop-shadow(0px 4px 4px #0000003f);
    }

    &__button {
      width: 180px;
      height: 55px;
      background: #454071;
      color: ${(props) => props.theme.colors.mainLight};
      text-transform: uppercase;
      border: none;
      font-size: ${(props) => props.theme.fontSizes.normal};
      box-shadow: 0px 6px 6px #0000003f;
      border-radius: 50px;
      transition: 0.5s;

      &:disabled {
        background-color: #8e90a67f;
        color: ${(props) => props.theme.colors.primaryDark};
        transition: 0.5s;
      }
    }
  }
`;

export default LoginFormStyled;
