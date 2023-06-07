import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useToken from "../../hooks/token/useToken";
import useUser from "../../hooks/user/useUser";
import { useAppDispatch } from "../../store";
import { UserCredentials } from "../../types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import paths from "../../routers/paths/paths";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);

    localStorage.setItem("token", token);
    const decodedToken = getTokenData(token);

    const userData = {
      ...decodedToken,
      token,
    };

    dispatch(loginUserActionCreator(userData));

    navigate(paths.home, { replace: true });
  };

  return <LoginForm handleLoginSubmit={handleFormSubmit} />;
};

export default LoginPage;
