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
        className="login-form__user"
        type="text"
        placeholder="Username"
        id="username"
      ></input>
      <input
        className="login-form__password"
        type="password"
        placeholder="Password"
        id="password"
      ></input>
      <button className="login-form__button">login</button>
    </LoginFormStyled>
  );
};

export default LoginForm;
