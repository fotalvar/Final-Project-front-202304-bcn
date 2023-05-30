import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .login-form {
    &__user,
    &__password {
      background: #ffffff;
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
      color: #ffffff;
      text-transform: uppercase;
      border: none;
      font-size: 18px;
      box-shadow: 0px 6.82667px 6.82667px rgba(0, 0, 0, 0.25);
      border-radius: 42.6667px;
    }
  }
`;

export default LoginFormStyled;
