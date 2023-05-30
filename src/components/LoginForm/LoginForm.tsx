import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled className="login-form">
      <img
        src="../images/logo.svg"
        alt="Teams Impact logo"
        width="180"
        height="95"
      />
      <input
        className="login-form__controller"
        type="text"
        placeholder="Username"
        id="username"
      />
      <input
        className="login-form__controller"
        type="password"
        placeholder="Password"
        id="password"
      />
      <button className="login-form__button" type="submit">
        login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
