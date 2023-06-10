import { useState } from "react";
import { UserCredentials } from "../../types";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  handleLoginSubmit: (user: UserCredentials) => void;
}

const LoginForm = ({
  handleLoginSubmit: handleFormSubmit,
}: LoginFormProps): React.ReactElement => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoginData({ username: "", password: "" });
    handleFormSubmit(loginData);
  };

  const isDisabled = !loginData.username || !loginData.password;

  return (
    <>
      <LoginFormStyled
        className="login-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
          value={loginData.username}
          onChange={onChangeLogin}
        />
        <input
          className="login-form__controller"
          type="password"
          placeholder="Password"
          id="password"
          value={loginData.password}
          onChange={onChangeLogin}
        />
        <button
          className="login-form__button"
          type="submit"
          disabled={isDisabled}
        >
          login
        </button>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
